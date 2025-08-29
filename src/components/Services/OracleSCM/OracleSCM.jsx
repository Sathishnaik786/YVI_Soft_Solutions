import React from 'react'
import Banner from '../../Banner/Banner'
import CardOne from '../Components/Card1/CardOne'
import CardTwo from '../Components/Card2/CardTwo'
import CardThree from '../Components/Card3/CardThree'
import ContactUs from '../Components/ContactUS/ContactUs'
import BannerThree from '../../Banner3/BannerThree'

const OracleSCM = () => {
  return (
    <div>
      {/* <Banner headingText='Oracle Supply Chain Management Resource'
              content="Our Oracle Supply Chain Management (SCM) resource integrates all aspects of your supply chain, from product conception to customer delivery, providing real-time visibility and enhancing efficiency across your organization. Please explore our website to learn how Oracle SCM can optimize your operations. For a personalized demonstration or consultation, do not hesitate to contact us."
              imageName="OracleSCM.jpeg"/> */}
      <BannerThree headingText='Oracle Supply Chain Management Resource'
                  content="Our Oracle Supply Chain Management (SCM) resource integrates all aspects of your supply chain, from product conception to customer delivery, providing real-time visibility and enhancing efficiency across your organization. Please explore our website to learn how Oracle SCM can optimize your operations. For a personalized demonstration or consultation, do not hesitate to contact us."
                  videoName='Oracle_SCM.mp4'/>
      <section id="featured-services" className="featured-services">

      <div className="container">
        <div className="section-title">
          <h2>Our Oracle SCM</h2>
          <p>Features</p>
        </div>
        <div className="row gy-4">
            <CardOne headingText='Unified SCM Platform'
                    content="Oracle Supply Chain Management consolidates all supply chain functions into a unified, cloud-based platform. It enables smooth and efficient data integration across procurement, production, warehousing, and distribution processes."
                    image='SCM_CBF.png'/>
            <CardOne headingText='Advanced Analytics'
                    content="Leverage Oracle SCM’s advanced analytics to make data-driven decisions. Obtain actionable insights that enable you to anticipate, adapt, and optimize your supply chain operations in real time."
                    image='SCM_Analytics.jpg'
                    dataAOS={200}/>
            <CardOne headingText='Cloud-Based Flexibility'
                    content="Our cloud platform provides exceptional security, scalability, and cost-effectiveness. It enables you to respond to market demands and expand your capabilities with minimal upfront investment."
                    image='OracleCloudInfra.jpeg'
                    dataAOS={400}/>
        </div>
      </div>
      </section>
      <section id="values" className="values">

      <div className="container aos-init aos-animate" data-aos="fade-up">
    
        <header className="section-title">
          <h2>Why choose us</h2>
          <p>Benefits</p>
        </header>
    
        <div className="row">
            <CardTwo headingText='Drive Operational Efficiency'
                    content="Automate and optimize your supply chain operations to enhance efficiency, reduce manual workload, minimize errors, and accelerate end-to-end processes."
                    dataAOS={200}/>
            <CardTwo headingText='Reduce Costs'
                    content="Reduce operational expenses through enhanced inventory management and optimized supplier agreements. Oracle SCM supports waste minimization and cost containment, contributing to improved overall financial performance."
                    dataAOS={400}/>
            <CardTwo headingText='Enhance Risk Management'
                    content="Proactively identify and address supply chain risks using effective tools to anticipate and minimize potential disruptions before they affect your operations."
                    dataAOS={600}/>
            <CardTwo headingText='Commit to Sustainability'
                    content="Attain your sustainability objectives by implementing efficient resource management, minimizing waste, and enhancing adherence to environmental standards."
                    dataAOS={600}/>
        </div>
        </div>
    
    </section>
    <section id="featured-services" className="featured-services">

      <div className="container">
        <div className="section-title">
          <h2>Oracle SCM</h2>
          <p>Modules</p>
        </div>
        <div className="row gy-4">
            <CardThree headingText='Procurement Cloud'
                       content="Enhance your procurement processes through optimized workflows, automated supplier negotiations, and effective contract management.  
This module is designed to assist organizations in streamlining and automating procurement activities. It offers functionalities for supplier management, sourcing, purchasing, and contract administration, enabling businesses to better control costs and mitigate risks associated with supplier relationships."
                       />
            <CardThree headingText='Logistics Cloud'
                       content="Enhance your transportation and warehousing operations while ensuring border compliance through comprehensive global trade management solutions."
                       dataAOS={200}/>
            <CardThree headingText='Product Lifecycle Management Cloud'
                       content="Oversee each phase of the product lifecycle—from initial concept to successful release—with efficiency, collaboration, and innovation."
                       dataAOS={400}/>
            <CardThree headingText='Supply Chain Planning Cloud'
                       content="Synchronize your supply and demand using our integrated planning tools. Enhance your forecasting accuracy and optimize inventory management."
                       dataAOS={400}/>
            <CardThree headingText='Manufacturing Cloud'
                       content="Provide comprehensive support for diverse manufacturing processes through flexible, efficient, and integrated manufacturing solutions."
                       dataAOS={400}/>
            <CardThree headingText='Inventory Management Cloud'
                       content="Maintain accurate and optimized inventory levels through real-time tracking, automated reordering, and efficient order management processes."
                       dataAOS={400}/>
        </div>
       </div>
    </section>
    <section id="featured-services" className="featured-services ">
      <div className="container">
        <div className="section-title">
          <h2>Our Oracle SCM</h2>
          <p>Integration</p>
        </div>
        <div className="row gy-4">
            <CardThree headingText='Seamless System Integration'
                       content="Oracle SCM seamlessly integrates with your existing Oracle ERP, CRM, and HCM systems, thereby improving data consistency and accessibility."
                       classname1='p-5 integ_bg1'/>
            <CardThree headingText='Flexible Third-Party Integration'
                       content="Integrate Oracle SCM seamlessly with other enterprise systems through robust APIs, enabling unified operations across varied IT environments."
                       classname1='p-5 integ_bg2'/>
        </div>
        </div>
    </section>
    <ContactUs headingText='Contact Us'
                   content="Are you ready to proceed or require additional information? Please contact our sales team directly or complete our contact form. Our dedicated team is available to assist with any inquiries or to arrange a demonstration."/>
    </div>
  )
}

export default OracleSCM
