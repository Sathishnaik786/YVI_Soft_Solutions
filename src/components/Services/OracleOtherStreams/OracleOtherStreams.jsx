import React from 'react'
import Banner from '../../Banner/Banner'
import CardOne from '../Components/Card1/CardOne'
import ContactUs from '../Components/ContactUS/ContactUs'
import BannerThree from '../../Banner3/BannerThree'

const OracleOtherStreams = () => {
  return (
    <div>
      {/* <Banner headingText='Other Core Capabilities'
              content="Oracle ERP (Enterprise Resource Planning) provides a comprehensive suite of applications that encompass a wide range of business processes across multiple domains. This includes, but is not limited to, Oracle Human Capital Management (HCM), Oracle Supply Chain Management (SCM), and Oracle Financials."
              imageName="OracleERp.png"/> */}
        <BannerThree headingText='Other Core Capabilities'
                    content="Oracle ERP (Enterprise Resource Planning) provides a comprehensive suite of applications that encompass a wide range of business processes across multiple domains. This includes, but is not limited to, Oracle Human Capital Management (HCM), Oracle Supply Chain Management (SCM), and Oracle Financials."
                    videoName='Other_Oracle_Streams.mp4'/>
        <section id="featured-services" className="featured-services">

        <div className="container">
            <div className="section-title">
            <h2>Our other major streams in  </h2>
            <p>Oracle ERP</p>
            </div>
            <div className="row gy-4">
                <CardOne headingText='Oracle Risk Management Cloud'
                         content="This suite offers advanced controls, analytics, and monitoring tools designed to support risk management and regulatory compliance. It enables organizations to enforce policies, detect and mitigate financial fraud risks, and adhere to financial reporting regulations."
                         image='OracleFCRM.jpg'
                         dataAOS={200}/>
                <CardOne headingText='Oracle Project Portfolio Management Cloud'
                         content="Oracle Project Portfolio Management (PPM) Cloud offers comprehensive and advanced solutions for the management of projects of all scales. The suite encompasses tools for project planning, resource allocation, risk assessment, and performance analysis, supporting organizations in effectively managing complex projects."
                         image='OraclePPMO.png'/>
                <CardOne headingText='Oracle Enterprise Performance Management Cloud'
                         content="Oracle EPM Cloud offers applications for financial planning and analysis, financial consolidation and closing, and reporting. It enables organizations to effectively manage and enhance their financial performance by providing a comprehensive suite of advanced tools for budgeting, forecasting, and financial reporting."
                         image='OracleEPMCloud.jpg'
                         dataAOS={400}/>
                <CardOne headingText='Oracle Marketing Cloud'
                         content="This component of the Oracle Customer Experience (CX) Cloud suite encompasses tools for marketing automation, customer segmentation, campaign management, and data analysis, designed to facilitate the development of personalized marketing strategies and improve customer engagement."
                         image='OracleMarketingCloud.jpeg'
                         dataAOS={400}/>
                <CardOne headingText='Oracle Sales Cloud'
                         content="Within the Oracle CX Cloud suite, Oracle Sales Cloud facilitates the optimization of sales processes, enhances lead and opportunity management, and supports improved sales performance through advanced customer insights and sales force automation tools."
                         image='OracleSalesCloud.jpeg'
                         dataAOS={400}/>
                <CardOne headingText='Oracle Service Cloud'
                         content="This stream concentrates on service management, encompassing customer service and field service management. It offers tools for omnichannel service delivery, including call center operations, self-service portals, and field service management, aimed at improving customer satisfaction and service efficiency."
                         image='OracleServiceCloud.jpeg'
                         dataAOS={400}/>
            </div>
            </div>
        </section>
        <section id="values" className="values">

      <div className="container aos-init aos-animate" data-aos="fade-up">
    
        <div className="row">
    
          <div className="col-lg-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div className="box" style={{backgroundColor: 'lightgrey'}}>
              <p className="imp_msg">	"These modules, in conjunction with Oracle HCM, Oracle SCM, and Oracle Financials, comprise a comprehensive suite of tools that enable organizations to automate and optimize their business processes across multiple functions. Each component is designed to integrate seamlessly with the others, offering a unified solution that utilizes cloud technology to improve operational efficiency, reduce costs, and support data-driven decision-making. " </p>
              
            </div>
          </div>
        </div>
      </div>
    </section>
    <ContactUs headingText='Contact Us'
               content="Are you interested in exploring any of these Oracle streams? Our sales team is available to provide detailed product information, arrange a customized demonstration, or respond to any questions you may have."/>
    </div>
  )
}

export default OracleOtherStreams
