import React from 'react'
import Banner from '../../Banner/Banner'
import Left from '../Components/Left/Left'
import Right from '../Components/Right/RIght'
import ContactUs from '../Components/ContactUS/ContactUs'
import CardOne from '../Components/Card1/CardOne'
import BannerThree from '../../Banner3/BannerThree'

const OracleHCM = () => {
  return (
    <div>
        {/* <Banner headingText='Oracle Human Capital Management'
                content="Our expertise is in supporting organizations with the deployment of comprehensive talent and HR solutions. We address all aspects, from strategic planning to daily operations, with a focus on delivering customized experiences and promoting human-centered engagement. By utilizing Oracle's advanced HCM innovations, we aim to drive continuous value and improvement for our clients."
                imageName='OracleHCM.jpg'/> */}
        <BannerThree headingText='Oracle Human Capital Management'
                    content="Our expertise is in supporting organizations with the deployment of comprehensive talent and HR solutions. We address all aspects, from strategic planning to daily operations, with a focus on delivering customized experiences and promoting human-centered engagement. By utilizing Oracle's advanced HCM innovations, we aim to drive continuous value and improvement for our clients."
                    videoName='Oracle_HCM.mp4'/>
        <section id="featured-services" className="featured-services">
            <div className="container">
              <div className="section-title">
                <h2>Solutions We Offer</h2>
                <p>Oracle Fusion Cloud ERP Modules</p>
              </div>
              <div className="row gy-4">
                <Left headingText='Oracle Human Resources'
                      content='Utilize customizable and scalable workflows to personalize employee experiences and enhance decision-making. Oracle HR streamlines resource management and associated processes for improved efficiency.'
                      module={true}
                      modules={['Core HR','Onboarding','Benefits','Absence management','Workforce directory','HR help desk','Work-life solutions','Advance HCM control','Workforce modelling and predictions']}
                      image='Oracle_hr.jpg'/>
                <Right headingText='Oracle Talent Management'
                      content="Oracle HCM Cloud implementation enables comprehensive management of your organization's talent lifecycle, including sourcing, recruiting, onboarding new employees, goal management, and performance recognition. With Oracle Talent Management, organizations can provide a seamless learning experience that supports ongoing development and maintains high levels of employee engagement."
                      module={true}
                      modules={['Performance management','Compensation','Learning','Succession planning']}
                      image='Oracle_TM.jpeg'/>
                <Left headingText='Oracle Recruiting'
                      content='Oracle Recruiting is a component of the Oracle HCM Cloud suite of modules. It enables organizations to efficiently attract, recruit, and onboard talent, while also enhancing the candidate onboarding experience.'
                      module={true}
                      modules={['Candidate Engagement','Hiring','Onboarding','Analytics and reporting','Extensibility']}
                      image='Oracle_RT.jpg'/>
                <Right headingText='Oracle Workforce Management'
                      content="Enhance organizational performance, employee productivity, and workforce competency with Oracle Workforce Management.  
It accurately forecasts labor needs to facilitate the creation and management of staff schedules, ensuring tasks are completed efficiently on a daily or hourly basis."
                      module={true}
                      modules={['Workforce time and labour','Strategic workforce planning','Workforce health and safety','Absences management','Workforce modelling and predictions']}
                      image='Oracle_WM.jpeg'/>
                <Left headingText='Oracle Payroll'
                      content='Oracle Payroll Cloud streamlines payroll operations by automating numerous manual tasks, thereby reducing the likelihood of errors. It ensures accurate payroll processing in compliance with regulatory rules and facilitates efficient tax reporting through the Oracle HCM Cloud suite.'
                      module={true}
                      modules={['Global payroll','Payroll interface','Onboarding','Analytics and reporting','Extensibility']}
                      image='Oracle_PR.jpg'/>
                <Right headingText='Oracle HCM Analytics'
                      content="Oracle HCM Analytics offers ready-to-use reports and dashboards designed to provide comprehensive, enterprise-wide insights into your workforce. It enables you to gain detailed understanding of workforce changes through predefined KPIs, facilitate alignment of performance objectives across the organization, and obtain valuable insights into employee retention and attrition rates."
                      module={false}
                      modules={[]}
                      image='Oracle_Any.webp'/>
                 <Left headingText='Oracle HR Helpdesk'
                      content='Oracle HR Help Desk provides employees with efficient and reliable access to HR services within your organization. This integrated service request management solution enables employees to promptly find answers to their inquiries while maintaining the security of sensitive information.'
                      module={true}
                      modules={['HR service delivery','Service request analytics','Data privacy']}
                      image='HR_HelpDesk.jpg'/>
              </div>
            </div> 
        </section>
        <ContactUs headingText='Get Started with Digital'
                   content="Leverage digital technologies to unlock new opportunities and drive innovation across all aspects of your organization."/>
        <section id="featured-services" className="featured-services">
            <div className="container">
                <div className="section-title">
                  <h2>Our approach is industry first</h2>
                  <p>Industries We Serve</p>
                </div>
            <div className="row gy-4">
              <CardOne headingText='Government'
                      content='YVI Soft provides consulting services to the public sector and government agencies, leveraging advanced technologies to address challenges arising from a constantly evolving environment.'
                      image='Industry_Gov.jpg'/>
              
              <CardOne headingText='Retail'
                      content="YVI Soft's agile digital retail technologies optimize B2B operations, improve productivity, and transform the customer experience."
                      image='retail.webp'
                      dataAOS={400}/>
              <CardOne headingText='Healthcare'
                      content='YVI Soft transforms your technology solutions and supports the development of a flexible, intelligent, and efficient healthcare system designed to deliver sustainable results.'
                      image='HealthCare.webp' dataAOS={200}/>
            </div>
            <div className="row gy-4">           
              <CardOne headingText='Manufacturing'
                      content="YVI Soft is transforming the manufacturing industry through innovative services and solutions, supporting the sector's growth and fostering the development of resilient, forward-looking systems."
                      image='Manufacturing.jpg'/>
              <CardOne headingText='Financial Services'
                      content="YVI Soft offers around-the-clock financial services and solutions designed to promote innovation and support you in maximizing the benefits of digital technology within the financial industry."
                      image='Financial.webp'
                      dataAOS={200}/>
             </div>
      </div>
    </section>
    </div>
  )
}

export default OracleHCM
