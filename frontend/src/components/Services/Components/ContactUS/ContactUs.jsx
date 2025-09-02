import React from 'react'
import { Link } from 'react-router-dom'
import RequestImage from '../../../../assets/img/request-image.webp'

const ContactUs = ({headingText,content}) => {
  return (
    <div>
      <section  className="consultation">
      <div className="container bg_blue d-flex justify-content-between">
        <div className="col-xl-6 col-md-6 aos-init aos-animate  align-items-center px-xl-5 p-5 " data-aos="zoom-out">
            <h2>{headingText}</h2>
            <p>{content}</p>
            <Link to='/contact'>Get in Touch</Link>
        </div>
        <div className="col-xl-4 col-md-6 aos-init aos-animate ">
          <img src={RequestImage} className="img-fluid" style={{maxHeight: '300px'}}/>
        </div>
      </div>

    
    </section>
    </div>
  )
}

export default ContactUs
