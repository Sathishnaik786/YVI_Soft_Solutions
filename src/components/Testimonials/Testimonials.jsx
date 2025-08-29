import React from 'react'
import './Testimonials.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Testimonials = () => {
  return (
    <div>
      
    <section id="testimonials" className="testimonials"  style={{backgroundColor:' #3B3B3B'}}>
        <div className="container" data-aos="fade-up">
            <header className="section-title">
                <h2>our expertise </h2>
                <p style={{color:'white'}}> Technologies and Platforms We Work With </p>
            </header>
            
        
     <Swiper
      modules={[Autoplay, Pagination]}
      speed={600}
      loop                         
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      slidesPerView={3}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 0 },
        480: { slidesPerView: 1, spaceBetween: 0 },
        640: { slidesPerView: 2, spaceBetween: 0 },
        992: { slidesPerView: 3, spaceBetween: 0 },
        
      }}
      pagination={{ clickable: true 
      }}
      
    >
        <SwiperSlide>
          
                
                    <div className="testimonial-item">
                        <div className="heading">Web - Backend </div>
                        <div className="t-item-group-technologies">
                            <div className="t-item-group-technology">
                                <img src="assets/img/Technologies_Platforms/java-logo.svg"  alt="" />
                            </div> 
            
                            <div className="t-item-group-technology">
                              <img src="assets/img/Technologies_Platforms/java-logo.svg"  alt="" />
                            </div> 

                            <div className="t-item-group-technology">
                              <img src="assets/img/Technologies_Platforms/python_1.svg"  alt="" />
                            </div> 

                            <div className="t-item-group-technology">
                              <img src="assets/img/Technologies_Platforms/node-js-logo-small.svg"  alt="" />
                            </div> 

                            <div className="t-item-group-technology">
                              <img src="assets/img/Technologies_Platforms/php-logo.svg"  alt="" />
                            </div> 

                            <div className="t-item-group-technology">
                              <img src="assets/img/Technologies_Platforms/c-plus-plus.svg"  alt="" />
                            </div> 
                        </div><br/>
            <div className="heading">Web - Frontend </div>
            <div className="t-item-group-technologies">
            
            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/html.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/css.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/javascript-logo.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/angular-logo.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/react-js-logo.svg"  alt="" />
            </div> 
          </div>
          </div>
        
        </SwiperSlide>
        <SwiperSlide>
          

          <div className="testimonial-item">
            <div className="heading">Mobile</div>
            <div className="t-item-group-technologies">
            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/ios-logo.svg"  alt="" />
            </div> 
            
            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/android-logo.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/xamarin-logo-vertical.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/cordova-logo.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/pwa-logo.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/react-native-logo.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/flutter-logo.svg"  alt="" />
            </div> 

            </div><br/>
            <div className="heading">Desktop </div>
           <div className="t-item-group-technologies">
            
            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/c-plus-plus.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/qt.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/c-sharp-logo.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/python_1.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/objective-c.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/swift.svg"  alt="" />
            </div> 
          </div>
          </div>
        

        </SwiperSlide>
        <SwiperSlide>
          
           

          <div className="testimonial-item">
            <div className="heading">Platforms</div>
            <div className="t-item-group-technologies">
            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/ms-dynamics-365.svg"  alt="" />
            </div> 
            
            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/salesforce.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/adobe-commerce.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/sharepoint-logo-vertical.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/servicenow.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/power-bi-2020.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/sap.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/qradar.svg"  alt="" />
            </div> 

            </div><br/>
            <div className="heading">Clouds </div>
            <div className="t-item-group-technologies">
            
            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/aws.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/azure-full.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/google-cloud-logo.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/digital-ocean.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/rackspace-horizontal.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="../../assets/img/Technologies_Platforms/swift.svg"  alt="" />
            </div> 
          </div>
          </div>
        

        </SwiperSlide>
                <SwiperSlide>
          
           <div className="testimonial-item">
                        <div className="heading">Web - Backend </div>
                        <div className="t-item-group-technologies">
                            <div className="t-item-group-technology">
                                <img src="assets/img/Technologies_Platforms/java-logo.svg"  alt="" />
                            </div> 
            
                            <div className="t-item-group-technology">
                              <img src="assets/img/Technologies_Platforms/java-logo.svg"  alt="" />
                            </div> 

                            <div className="t-item-group-technology">
                              <img src="assets/img/Technologies_Platforms/python_1.svg"  alt="" />
                            </div> 

                            <div className="t-item-group-technology">
                              <img src="assets/img/Technologies_Platforms/node-js-logo-small.svg"  alt="" />
                            </div> 

                            <div className="t-item-group-technology">
                              <img src="assets/img/Technologies_Platforms/php-logo.svg"  alt="" />
                            </div> 

                            <div className="t-item-group-technology">
                              <img src="assets/img/Technologies_Platforms/c-plus-plus.svg"  alt="" />
                            </div> 
                        </div><br/>
            <div className="heading">Web - Frontend </div>
            <div className="t-item-group-technologies">
            
            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/html.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/css.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/javascript-logo.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/angular-logo.svg"  alt="" />
            </div> 

            <div className="t-item-group-technology">
              <img src="assets/img/Technologies_Platforms/react-js-logo.svg"  alt="" />
            </div> 
          </div>
          </div>

          
        

        </SwiperSlide>

        
      </Swiper>
      
       
       
      
    </div>

</section>
    </div>
  )
}

export default Testimonials
