import React, { useState } from 'react'
import './Info_Form.css'
import API_CONFIG from '../../config/api.js'

const Info_Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('') 
  const [errorMessage, setErrorMessage] = useState('') 
// Add a test mode flag - set to true to test GoDaddy database directly
const TEST_REAL_DATABASE = true // Set to true to test remote GoDaddy database
const apiUrl = API_CONFIG.getApiUrl('db_save.php')
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

 
  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('') // Clear previous errors
    
    // Validate required fields
    if (!form.name.trim()) {
      setStatus('error')
      setErrorMessage('Name is required')
      return
    }
    if (!form.email.trim()) {
      setStatus('error')
      setErrorMessage('Email is required')
      return
    }
    if (!form.message.trim()) {
      setStatus('error')
      setErrorMessage('Message is required')
      return
    }

    // Additional validation
    if (form.name.length < 2) {
      setStatus('error')
      setErrorMessage('Name must be at least 2 characters long')
      return
    }

    if (form.message.length < 10) {
      setStatus('error')
      setErrorMessage('Message must be at least 10 characters long')
      return
    }

    setStatus('loading')

    try {
      // Check if we're in development (localhost)
      const isDevelopment = window.location.hostname === 'localhost'
      
      // Add a test mode flag - set to true to test real database in development
      const TEST_REAL_DATABASE = true // Set to true to test GoDaddy database directly
      
      if (isDevelopment && !TEST_REAL_DATABASE) {
        // Mock backend for development
        console.log('🚀 Development Mode: Form submission:', form)
        
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 1500))
        
        // Mock success (you can change this to test error states)
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setErrorMessage('')
        
        // Log for development
        console.log('✅ Mock database save successful!')
        console.log('💾 Database: Users.contact_messages (REMOTE TEST)')
        console.log('🌐 API URL:', apiUrl)
        console.log('👤 From:', form.name, '(' + form.email + ')')
        console.log('💬 Message:', form.message)
        console.log('⚠️ NOTE: Update domain in src/config/api.js')
        
        return
      }
      
      // Real PHP backend with database (production or test mode)
      console.log(isDevelopment ? '🧪 Testing real database in development...' : '🚀 Production mode')
      const formData = new FormData()
      formData.append('name', form.name)
      formData.append('email', form.email)
      formData.append('subject', form.subject)
      formData.append('message', form.message)

      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData
      })

      const result = await response.json()
      
      if (result.status === 'success') {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setErrorMessage('')
      } else {
        setStatus('error')
        setErrorMessage(result.message || 'Unknown error occurred')
        console.error('Server error:', result)
      }
    } catch (err) {
      console.error('Error sending message:', err)
      setStatus('error')
      setErrorMessage('Network error. Please check your connection and try again.')
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <header className="section-title">
          <h2>Get in Touch</h2>
          <p>Our team is ready to help, innovate and collaborate!</p>
        </header>
      </div>

      <div className="container">
        <div className="row gy-5 gx-lg-5">
        
          <div className="col-lg-6">
            <div className="info">
              <h3>Get in Touch</h3>
              <p>Please fill the form for general enquiries</p>
              <div className="info-item d-flex">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h4>India Entity:</h4>
                  <p>Hyderabad, Telangana</p>
                </div>
              </div>
              <div className="info-item d-flex">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h4>Email:</h4>
                  <p>info@yvisoft.com</p>
                </div>
              </div>
              <div className="info-item d-flex">
                <i className="bi bi-phone flex-shrink-0"></i>
                <div>
                  <h4>Call:</h4>
                  <p>+91-8317622417</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <form id="contactForm" onSubmit={handleSubmit} className="php-email-form" action="db_save.php" method="POST">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Your Email"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group mt-3">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group mt-3">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="my-3">
                {status === 'loading' && <div className="loading">Sending...</div>}
                {status === 'error' && (
                  <div className="error-message" style={{color: 'red'}}>
                    ❌ {errorMessage || 'Failed to send message. Please try again later.'}
                  </div>
                )}
                {status === 'success' && (
                  <div className="sent-message" style={{color: 'green'}}>
                    ✅ Message received. Thank you!
                  </div>
                )}
              </div>

              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info_Form
