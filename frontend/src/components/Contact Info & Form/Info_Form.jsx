import React, { useState } from 'react'
import './Info_Form.css'
import { supabase } from '../../config/supabase.js'
import API_CONFIG, { safeFetch } from '../../config/api.js'

const Info_Form = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [status, setStatus] = useState('') 
  const [errorMessage, setErrorMessage] = useState('') 
  const [submittedName, setSubmittedName] = useState('') // Store the name for success message

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const validatePhone = (phone) => {
    // Basic phone number validation (allows various formats)
    const phoneRegex = /^[+]?[1-9][\d]{0,15}$/;
    // Remove spaces, dashes, parentheses for validation
    const cleanPhone = phone.replace(/[\s\-()]/g, '');
    return phoneRegex.test(cleanPhone);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('🚀 FORM SUBMIT TRIGGERED!')
    console.log('📝 Form data before validation:', form)
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
    if (!form.phone.trim()) {
      setStatus('error')
      setErrorMessage('Phone number is required')
      return
    }
    if (!validatePhone(form.phone)) {
      setStatus('error')
      setErrorMessage('Please enter a valid phone number')
      return
    }
    if (!form.message.trim()) {
      setStatus('error')
      setErrorMessage('Message is required')
      return
    }

    // Additional validation based on database schema
    if (form.name.length > 100) {
      setStatus('error')
      setErrorMessage('Name cannot exceed 100 characters')
      return
    }

    if (form.email.length > 150) {
      setStatus('error')
      setErrorMessage('Email cannot exceed 150 characters')
      return
    }

    if (form.company.length > 100) {
      setStatus('error')
      setErrorMessage('Company name cannot exceed 100 characters')
      return
    }

    if (form.phone.length > 20) {
      setStatus('error')
      setErrorMessage('Phone number cannot exceed 20 characters')
      return
    }

    if (form.subject.length > 200) {
      setStatus('error')
      setErrorMessage('Subject cannot exceed 200 characters')
      return
    }

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
    console.log('🔄 Setting status to loading')

    try {
      console.log('🚀 FORM SUBMISSION STARTED')
      console.log('📤 Form Data:', {
        name: form.name,
        email: form.email,
        company: form.company,
        phone: form.phone,
        subject: form.subject || 'No Subject',
        message: form.message
      })
      
      // Store the name before resetting the form
      const nameToStore = form.name
      setSubmittedName(nameToStore)
      console.log('💾 Stored submitted name:', nameToStore)
      
      // 1️⃣ Insert into Supabase with proper error handling
      console.log('📡 Sending data to Supabase...')
      let supabaseSuccess = false;
      try {
        const { data: insertedData, error: supabaseError } = await supabase
          .from('contact_messages_new')
          .insert([{
            name: form.name,
            email: form.email,
            company: form.company,
            phone: form.phone,
            subject: form.subject || 'No Subject',
            message: form.message,
            ip: 'unknown', // optional: fetch from backend if needed
            user_agent: navigator.userAgent,
            created_at: new Date().toISOString()
          }])
          .select() // Ensure we return the inserted row

        if (supabaseError) {
          console.error('Supabase insertion error:', supabaseError)
          // Don't throw error here, we want to continue with email sending even if Supabase fails
        } else {
          console.log('✅ Data saved to Supabase:', insertedData)
          supabaseSuccess = true;
        }
      } catch (supabaseErr) {
        console.error('Supabase operation failed:', supabaseErr)
        // Continue with email sending even if Supabase fails
      }

      // 2️⃣ Send Email via Node.js backend with safe fetch
      console.log('📧 Sending email notification...')
      try {
        // Now send the email
        const response = await safeFetch(API_CONFIG.getApiUrl(), {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            from: form.email,
            subject: `YVI Soft Contact Form: ${form.subject || 'No Subject'}`,
            template: 'contact-form',
            data: {
              name: form.name,
              email: form.email,
              company: form.company || '',
              phone: form.phone || '',
              subject: form.subject || 'No Subject',
              message: form.message,
              ip: 'unknown',
              userAgent: navigator.userAgent,
              timestamp: new Date().toISOString()
            }
          }),
        })

        // Check if response is successful and has required fields
        if (response && response.data && response.data.success) {
          console.log('✅ Email sent:', response.data.messageId || 'No ID')
          // Only set success if both operations were attempted
          setStatus('success')
          setForm({ name: '', email: '', company: '', phone: '', subject: '', message: '' })
          setErrorMessage('')
        } else {
          console.error('❌ Email API error:', response)
          throw new Error(response?.data?.error || 'Email API returned unexpected response')
        }
      } catch (emailErr) {
        console.error('Email sending failed:', emailErr)
        setStatus('error')
        setErrorMessage(`Failed to send email: ${emailErr.message || 'Please try again later.'}`)
        return
      }
      
      // If we get here, email was sent successfully
      // Supabase success is optional but logged
      if (!supabaseSuccess) {
        console.warn('⚠️ Supabase insertion failed, but email was sent successfully')
      }
      
    } catch (err) {
      console.error('Network or API error:', err)
      setStatus('error')
      setErrorMessage(`Failed to send message: ${err.message || 'Please try again later.'}`)
      console.log('🔄 Setting status to error')
    }
  }

  // Add effect to log status changes
  React.useEffect(() => {
    console.log('🔄 Status changed to:', status)
  }, [status])

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
            <form id="contactForm" onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    maxLength={100}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Your business email"
                    value={form.email}
                    onChange={handleChange}
                    maxLength={150}
                    required
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-6 form-group">
                  <input
                    type="text"
                    name="company"
                    className="form-control"
                    placeholder="Your Company"
                    value={form.company}
                    onChange={handleChange}
                    maxLength={100}
                    required
                  />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    maxLength={20}
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
                  maxLength={200}
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
                {console.log('🔄 Rendering status messages, current status:', status)}
                {status === 'loading' && <div className="loading">Sending...</div>}
                {status === 'error' && (
                  <div className="error-message">
                    ❌ {errorMessage || 'Failed to send message. Please try again later.'}
                  </div>
                )}
                {status === 'success' && (
                  <div className="sent-message">
                    ✅ Thank you, {submittedName}! Your message has been received! Our team will contact you very soon.
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