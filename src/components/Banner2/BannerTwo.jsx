import React from 'react'
import YVISoft from '../../assets/img/YVI Soft1.mp4'


const BannerTwo = ({headingText,content}) => {
  return (
        <section id="hero-animated" className="hero-animated d-flex align-items-center" style={{ backgroundColor: 'lightblue' }}>
            <div className="container d-flex flex-column justify-content-center aos-init aos-animate" data-aos="zoom-out">
                <div className="row gy-4">
                    <div className="col-xl-4 col-md-4 d-flex aos-init aos-animate align-items-center" data-aos="zoom-out">
                        <div>
                            <h2>{headingText}</h2>
                            <p>{content}</p>

                        </div>
                    </div>
                    <div className="col-xl-8 col-md-6 d-flex aos-init aos-animate align-items-center" data-aos="zoom-out">
                        <video controls loop width="1000" height="300" autoPlay muted>
                            <source src={YVISoft} type="video/mp4"/>
                            Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            
        </section>
  )
}

export default BannerTwo
