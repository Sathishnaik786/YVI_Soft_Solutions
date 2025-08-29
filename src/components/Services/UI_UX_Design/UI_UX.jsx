import React from 'react'
import Banner from '../../Banner/Banner'
import UXUIDesign from '../../../assets/img/UXUIDesign.png'
import ContactUs from '../Components/ContactUS/ContactUs'
import CardOne from '../Components/Card1/CardOne'
import BannerThree from '../../Banner3/BannerThree'

const UI_UX = () => {
  return (
    <div>
      {/* <Banner headingText='UX & UI Design Services'
      content="Enhance your competitive advantage by delivering seamless interactions and improving user experience through a research-driven design approach. Our services can help you retain over 50% of your customers and more. We also offer a complimentary evaluation of your homepage's UI/UX."
      imageName='UX.jpg'/> */}
      <BannerThree headingText='UX & UI Design Services'
                  content="Enhance your competitive advantage by delivering seamless interactions and improving user experience through a research-driven design approach. Our services can help you retain over 50% of your customers and more. We also offer a complimentary evaluation of your homepage's UI/UX."
                  videoName='ui-ux-design.mp4'/>
      <section id="featured-services" className="featured-services">

      <div className="container">
        <div className="section-title">
          <p>UX & UI design</p>
        </div>
        <div className="row gy-4">

          <div className="col-xl-12 col-md-6 d-flex aos-init aos-animate justify-content-between align-items-center px-xl-5 p-5 bg-pink_light" data-aos="zoom-out">
            <div className="col-xl-6 col-md-6 d-flex aos-init aos-animate" data-aos="zoom-out">
              <div className="about-item position-relative">
                <h4><span  className="stretched-link">Enhancing user engagement through UI/UX services that prioritize the needs of the user.</span></h4>
                <p>
                  In today competitive landscape, YVI Soft integrates design expertise with a data-driven research strategy to deliver a seamless and positive user experience. Research suggests that every dollar invested in UX can generate an ROI of up to $100. Recognizing the vital role of UI and UX design in the marketplace, we utilize a user-centered, research-based approach to develop impactful products that help you stay ahead of the competition and maximize user satisfaction and engagement.
                </p>
                <b>Experience the difference our services can make</b>
                <p className="service_more">
  
                  <span>Transform abstract concepts into tangible solutions</span>
                  <span>User journeys that captivate and involve users</span>
                  <span>User-friendly interfaces</span>
                  <span>Sustainable design frameworks</span>
                  <span>Modernize existing legacy applications</span>
                </p>
  
              </div>
            </div>
            <div className="col-xl-5 col-md-6 d-flex aos-init aos-animate" data-aos="zoom-out">
              <img src={UXUIDesign} className="img-fluid" alt=""/>
            </div>
        
          </div>

        </div>

      </div>
    </section>
    <ContactUs headingText='Create Your Path to Digital Success!'
               content="Our team of experienced web designers is committed to developing a website that accurately reflects your brand identity, clearly communicates your message, and effectively converts visitors into clients."/>
    <section id="featured-services" className="featured-services">

      <div className="container">
        <div className="section-title">
          <h2>Our UI/UX design </h2>
          <p>Services include</p>
        </div>
        <div className="row gy-4">
            <CardOne headingText='Research-driven UI/UX design'
                     content="Our design team prioritizes research-driven approaches, emphasizing the collection of real-time user feedback and the development of intuitive, user-friendly interfaces to support innovative solutions."
                     image='ResearchUIUX.png'/>
            <CardOne headingText='Data Visualization'
                     content="We develop tailored visualizations for different user groups, ensuring their specific needs are prioritized. Our services help you analyze your database through intuitive and visually engaging representations."
                     image='UXDataVisualization.jpg'
                     dataAOS={200}/>
            <CardOne headingText='Wireframing & Prototyping'
                     content="Wireframes, mockups, and prototypes facilitate visualization of concepts, enable practical demonstration through demos, and allow for constructive feedback on your product ideas. They also assist in establishing an effective understanding of appropriate interaction patterns and layout structures."
                     image='retail.webp'
                     dataAOS={400}/>
        </div>
        <div className="row gy-4">
            <CardOne headingText='UI/UX Consulting'
                     content="YVI Soft offers around-the-clock financial services and solutions designed to promote innovation and help you maximize the benefits of digital technology within the financial industry."
                     image='UIUX-consulting.jpg'/>
            <CardOne headingText='UI/UX Audit Services'
                     content="YVI Soft offers support for user testing, assessing the usability, accessibility, and visual design of products, as well as providing recommendations for improvements. Our UI/UX audits are focused on enhancing the overall user experience by promoting greater seamlessness and intuitiveness."
                     image='UXAudit.jpg'
                     dataAOS={200}/>
            <CardOne headingText='User Testing'
                     content="Our team of specialists ensures that solutions function correctly across all devices. Testing methodologies are employed to evaluate the effectiveness and usability of the product for end users."
                     image='UserExperienceTesting.jpg'
                     dataAOS={200}/>
        </div>

      </div>
    </section>
    </div>
  )
}

export default UI_UX
