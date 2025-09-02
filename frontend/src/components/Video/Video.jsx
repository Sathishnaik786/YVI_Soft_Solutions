import React from 'react'
import YVISoft from '../../assets/img/YVISoftPPT.mp4'
import './Video.css'

const Video = () => {
  return (
    <div>
      <section id="featured-services" className="featured-services"  style={{backgroundColor:' #3B3B3B'}}>
                      <div className="container">
                          <div className="section-title">
                              <h2>Offerings</h2>
                              <p style={{color:'white'}}>OUR Offerings</p>
                          </div>
                          <div className="row gy-4">
                              <div className="col-xl-0 col-md-0 d-flex aos-init aos-animate align-items-center" data-aos="zoom-out">
                              </div>
                              <div className="col-xl-11 col-md-9 d-flex aos-init aos-animate align-items-center" data-aos="zoom-out">
                                  <video  loop width="1400" height="550" autoPlay muted>
                                  <source src={YVISoft} type="video/mp4"/>
                                  Your browser does not support the video tag.
                                  </video>
                              </div>
                          </div>
                      </div>    
                  </section>
    </div>
  )
}

export default Video
