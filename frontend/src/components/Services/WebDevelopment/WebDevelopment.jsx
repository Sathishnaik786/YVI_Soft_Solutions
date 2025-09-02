import React from 'react'
import Banner from '../../Banner/Banner'
import CardFour from '../Components/Card4/CardFour'
import Approach from '../../Approach/Approach'
import BannerThree from '../../Banner3/BannerThree'

const WebDevelopment = () => {
  return (
    <div>
      {/* <Banner headingText='Web Application Development Full Stack'
              content="Our Company provides comprehensive web development services, including custom web application development, website design and development, e-commerce solutions, content management system (CMS) development, and web portal development. Our team of experienced web developers utilizes the latest technologies to deliver customized solutions that align with each client's specific needs. For professional and reliable web development services, YVI Soft is an excellent partner to consider."
              imageName='WebAppDev.jpg'/> */}
        <BannerThree headingText='Web Application Development Full Stack'
                   content="Our Company provides comprehensive web development services, including custom web application development, website design and development, e-commerce solutions, content management system (CMS) development, and web portal development. Our team of experienced web developers utilizes the latest technologies to deliver customized solutions that align with each client's specific needs. For professional and reliable web development services, YVI Soft is an excellent partner to consider."
                   videoName='Web_Development.mp4'/>
    <section id="featured-services" className="featured-services">
      <div className="container">
        <div className="section-title">
          <h2>Robust and Resilient</h2>
          <p>Full Stack Web Development by YVI Soft</p>
       
        </div>
        <div className="row gy-4">
          <CardFour headingText='Business analysis'
                  content="Our business analysts focus on thoroughly understanding the needs of your target audience to conduct requirements engineering and define the scope of the solution. They serve as a liaison between business stakeholders and the IT team, ensuring clear communication and alignment among all parties involved." 
                  image='ba.svg'/>
          <CardFour headingText='UX and UI design'
                  content="We believe that effective design involves more than just aesthetic appeal; it also enhances functionality.  
Therefore, we prioritize the user experience by creating solutions that are user-friendly, intuitive, and engaging." 
                  image='design.svg'
                  dataAOS={200}/>
          <CardFour headingText='Architecture'
                  content="Our solution architects will systematically plan and strategize all functional components, prioritizing feasibility and comprehensiveness. They will also carefully select the most appropriate technologies for implementation and thoroughly map out all API connections within the web solution to ensure seamless integration with external systems." 
                  image='architecture.svg'
                  dataAOS={400}/>
          <CardFour headingText='Front-end development'
                  content="Our front-end development team is capable of implementing any design concept and ensuring the proper functionality of all interface elements. We have expertise with a wide range of popular JavaScript frameworks, including Angular, React, Meteor, Vue, Next.js, and Ember." 
                  image='front-end.svg'
                  dataAOS={600}/>
          <CardFour headingText='Back-end development'
                  content="Our developers meticulously implement the business logic of your web application on the backend. We rely on robust frameworks to ensure efficient, high-quality coding across technologies such as .NET, Java, Python, Node.js, PHP, and Go." 
                  image='back-end-red.svg'
                  dataAOS={800}/>
          <CardFour headingText='Integration'
                  content="We develop APIs to facilitate seamless integration of your web application with corporate and third-party systems and services, ensuring real-time data synchronization across all platforms." 
                  image='integration.svg'
                  dataAOS={1000}/>
          <CardFour headingText='Testing and QA'
                  content="Our commitment is to ensure that your web solution functions seamlessly, delivers optimal performance, provides an intuitive user experience, and adheres to the highest security standards. 
With a dedicated team of experienced testing professionals, we are confident in our ability to uphold these commitments." 
                  image='testing-type.svg'
                  dataAOS={1200}/>
          <CardFour headingText='Help desk'
                  content="We provide Level 1, Level 2, and Level 3 support services, ensuring the delivery of hotfixes within 24 hours to promptly address and resolve any issues related to usage, technology, or code. Our goal is to support you in maintaining high availability and seamless functionality of your web application." 
                  image='help-desk_1.svg'
                  dataAOS={1400}/>
          <CardFour headingText='Continuous support and evolution'
                  content="Our team specializes in optimizing your web-based software to enhance its performance, maintain competitiveness in the market, and accommodate your evolving business needs. Through our comprehensive DevOps practices, we are capable of implementing essential updates within 1-2 days and deploying new, well-planned functional modules on a regular schedule of every 2 to 6 weeks." 
                  image='support.svg'
                  dataAOS={1600}/>
        </div>
      </div> 
    </section> 
    {/* <section id="featured-services" className="featured-services">
      
    </section> */}
     <Approach/> 
    </div>
  )
}

export default WebDevelopment
