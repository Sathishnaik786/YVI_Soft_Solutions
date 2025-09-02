import React from 'react'
import Banner from '../../Banner/Banner'
import CardOne from '../Components/Card1/CardOne'
import CardTwo from '../Components/Card2/CardTwo'
import CardThree from '../Components/Card3/CardThree'
import ContactUs from '../Components/ContactUS/ContactUs'
import BannerThree from '../../Banner3/BannerThree'

const OracleFinancials = () => {
  return (
    <div>
      {/* <Banner headingText='Oracle Financials'
              content="Oracle Financials, a component of Oracle’s Cloud ERP solutions, provides a comprehensive suite designed to optimize financial management processes, support informed decision-making, and facilitate business growth.  
Please contact us to learn how Oracle Financials can enhance your financial operations. We offer customized demonstrations and consultations to meet your specific needs."
              imageName="OracleFinancials.jpg"/> */}
        <BannerThree headingText='Oracle Financials'
                    content="Oracle Financials, a component of Oracle’s Cloud ERP solutions, provides a comprehensive suite designed to optimize financial management processes, support informed decision-making, and facilitate business growth.  
Please contact us to learn how Oracle Financials can enhance your financial operations. We offer customized demonstrations and consultations to meet your specific needs."
                    videoName="Oracle_Financials.mp4"/>
       <section id="featured-services" className="featured-services">
            <div className="container">
                <div className="section-title">
                <h2>Our Oracle Financials</h2>
                <p>Features</p>
                </div>
                <div className="row gy-4">
                    <CardOne headingText='Complete Financial Management'
                            content="Utilize comprehensive financial functionalities, including general ledger, accounts payable, accounts receivable, fixed assets, and cash management, seamlessly integrated within a single cloud-based platform."
                            image='CompleteFinancialMgmt.jpg'
                            classname={3}/>
                    <CardOne headingText='Advanced Financial Controls'
                            content="Leverage strong financial controls to ensure accuracy, mitigate the risk of fraud, and uphold compliance with international accounting standards and regulations."
                            image='AdvancedFinancialAnalytics.jpg'
                            dataAOS={200}
                            classname={3}/>
                    <CardOne headingText='Real-Time Analytics'
                            content="Utilize integrated analytics to obtain real-time insights into your financial performance. Customize dashboards and reports to monitor key performance indicators (KPIs) and support data-driven strategic decision-making."
                            image='RealtimeAnalytics.jpg'
                            dataAOS={400}
                            classname={3}/>
                    <CardOne headingText='Automation and Efficiency'
                            content="Automate routine tasks such as transaction processing and data entry to enhance efficiency. Optimize your financial workflows to close books more promptly and minimize manual errors."
                            image='OraFinAutoEff.jpg'
                            dataAOS={400}
                            classname={3}/>

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
            <CardTwo headingText='Drive Better Decisions'
                    content="Make more informed decisions by leveraging comprehensive, real-time data access. Oracle Financials offers the insights and reporting capabilities needed to effectively understand and manage your financial environment."
                    dataAOS={200}/>
            <CardTwo headingText='Increase Efficiency and Reduce Costs'
                    content="Automate and streamline your financial workflows to lower operational costs, enhance efficiency, and allocate resources more effectively toward strategic initiatives."
                    dataAOS={400}/>
            <CardTwo headingText='Ensure Compliance'
                    content="Ensure adherence to financial regulations across multiple jurisdictions with Oracle Financials. Automated updates keep you consistently aligned with the latest compliance requirements, minimizing the need for manual adjustments."
                    dataAOS={600}/>
            <CardTwo headingText='Scalable for Growth'
                    content="As your business expands, Oracle Financials scales accordingly. Seamlessly integrate new functionalities and modules to meet your evolving needs while maintaining operational continuity."
                    dataAOS={600}/>
        </div>
      </div>
    </section>
    <section id="featured-services" className="featured-services">

        <div className="container">
            <div className="section-title">
            <h2>Oracle Financials</h2>
            <p>Modules</p>
            </div>
            <div className="row gy-4">
                <CardThree headingText='General Ledger'
                           content="Obtain a comprehensive understanding of your financial position through our customizable and scalable ledger and accounting solutions."/>
                <CardThree headingText='Accounts Payable'
                           content="Automate invoice processing and payments to enhance operational efficiency, optimize cash flow management, and strengthen relationships with vendors."
                           dataAOS={200}/>
                <CardThree headingText='Accounts Receivable'
                           content="Optimize billing and collections procedures to enhance cash flow management and customer experience."
                           dataAOS={400}/>
                <CardThree headingText='Cash Management'
                           content="Enhance your liquidity and financial stability through effective management of bank accounts, accurate cash flow forecasting, and strategic investment planning."
                           dataAOS={400}/>
                <CardThree headingText='Fixed Assets'
                           content="Oversee the entire lifecycle of organizational assets, from acquisition to retirement, optimizing asset utilization and implementing effective depreciation strategies."
                           dataAOS={400}/>
            </div>
        </div>
    </section>
    <section id="featured-services" className="featured-services ">
      <div className="container">
        <div className="section-title">
          <h2>Our Oracle Financials</h2>
          <p>Integration</p>
        </div>
        <div className="row gy-4">
            <CardThree headingText='Seamless System Integration'
                       content="Oracle Financials integrates smoothly with Oracle SCM, HCM, and other ERP solutions, promoting data consistency and delivering a comprehensive view of your business operations."
                       classname1='p-5 integ_bg1'/>
            <CardThree headingText='Flexible Third-Party Integration'
                       content="Seamlessly integrate with third-party systems through reliable APIs, ensuring Oracle Financials aligns effectively within your current IT infrastructure."
                       classname1='p-5 integ_bg2'/>
        </div>
        </div>
    </section>
    <ContactUs headingText='Contact Us'
                   content="Would you like to explore Oracle Financials in more detail? Our sales team is available to provide comprehensive product information, arrange a personalized demonstration, or address any questions you may have."/>
    </div>
  )
}

export default OracleFinancials
