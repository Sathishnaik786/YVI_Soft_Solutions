import { useState } from "react";
import about from '../../assets/img/about.jpg'
import './Home.css'
import Info_Form from "../Contact Info & Form/Info_Form";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import BannerThree from "../Banner3/BannerThree";
import ITConsulting from "../../assets/img/OurServices/ITConsulting.jpeg"
import SoftwareDevelopment from "../../assets/img/OurServices/SoftwareDevelopment.jpeg"
import ApplicationServices from "../../assets/img/OurServices/ApplicationServices.jpeg"
import UXUIDesign from "../../assets/img/OurServices/UX-UIDesign.jpeg"
import TestingQA from "../../assets/img/OurServices/TestingQA.jpeg"
import DataAnalytics from "../../assets/img/OurServices/DataAnalytics.jpeg"
import InfrastructureServices from "../../assets/img/OurServices/InfrastructureServices.jpeg"
import CybersecurityServices from "../../assets/img/OurServices/CybersecurityServices.jpeg"


const Home = () => {
  const [activeTab,setActiveTab]=useState('tab-2');
  const services = [
      {
    id: "tab-1",
    title: "IT Consulting",
    description:
      "Our experts can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience.",
    img: ITConsulting,
    
  },
  {
    id: "tab-2",
    title: "Software Development",
    description:
      "A software development firm committed to excellence, we specialize in creating reliable, scalable, and secure software solutions compatible with all operating systems, browsers, and devices. Leveraging extensive industry expertise and the latest technological advancements, we deliver customized solutions and products designed to meet the specific needs and behaviors of our clients' users.",
    img: SoftwareDevelopment,
   
  },
  
  {
    id: "tab-3",
    title: "Application Services",
    description:
      "Our experts help mid-sized and large firms build, test, protect, manage, migrate and optimize digital solutions ensuring they’re always up and running and achieve the optimal TCO.",
    img: ApplicationServices,
    
  },
  {
    id: "tab-4",
    title: "UX/UI Design",
    description:
      "User experience and user interface design for all types of websites, SaaS, and web/mobile apps. We combine the latest UI/UX trends with our customers’ individual goals and needs to deliver intuitive, vibrant, and impactful designs that power up businesses.",
    img: UXUIDesign,
    
  },
  {
    id: "tab-5",
    title: "Testing & QA",
    description:
      "We offer full-range QA and testing outsourcing services, can help to develop your QA or enhance the existing one, assist you in TCoE setup and evolution. We perform end-to-end testing of mobile, web and desktop applications at each stage of the development lifecycle.",
    img: TestingQA,
   
  },
  {
    id: "tab-6",
    title: "Data Analytics",
    description:
      "We support businesses in achieving fact-based decision-making by converting their historical and real-time, traditional and big data into actionable insights. Our services are tailored to make the raw data and the environment ready, as well as strengthen the business with advanced analytics capabilities.",
    img: DataAnalytics,
   
  },
  {
    id: "tab-7",
    title: "Infrastructure Services",
    description:
      "We ensure IT infrastructure reliability and scalability through managed services, cloud consulting, data center support, and DevOps integration. We help businesses keep their digital ecosystem fast, stable, and secure.",
    img: InfrastructureServices,
 
  },
  {
    id: "tab-8",
    title: "Cybersecurity Services",
    description:
      "Equipped with experience in information security and employing ISO 27001 certified information security management practices, we help to achieve the robust protection of the companies’ applications and networks.",
    img: CybersecurityServices, 
  },
  ];
  const activeService=services.find((service)=>service.id===activeTab)
  
    return (
        <div>
            {/* <Banner headingText='IT Consulting and Services to Support Your Digital Transformation'
                content='Leverage our tailored software engineering services to optimize your digital capabilities. We are committed to supporting your efforts to streamline operations, improve efficiency, and enhance the customer experience through customized solutions.'
                imageName='Index.jpg' /> */}
            <BannerThree headingText='IT Consulting and Services to Support Your Digital Transformation'
                        content="Leverage our tailored software engineering services to optimize your digital capabilities. We are committed to supporting your efforts to streamline operations, improve efficiency, and enhance the customer experience through customized solutions."
                        videoName="YVI.mp4" />

                               {/* ======= About Section ======= */}
       <section id="about" className="about">
        <div className="container aos-init aos-animate" data-aos="fade-up">
            <div className="section-title">
                <h2>About Us</h2>
                <p>Who We Are</p>
            </div>
            <div className="row gx-0">
                <div className="col-lg-6 d-flex flex-column justify-content-center aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                    <div className="content">
                        <h2>Our passion and values collectively drive us to develop and enhance IT services and products that contribute to shaping a better future.</h2>
                        <p>
                            YVI Soft was founded by a dedicated team of technology and business professionals with backgrounds from reputable organizations. 
                            Our team possesses extensive experience and specialized expertise in consulting, enabling us to offer strategic guidance to organizations aimed at optimizing technology investments, managing business risks, and enhancing return on investment (ROI). 
                            Our technology consulting team applies their innovation to design, develop, and implement comprehensive, end-to-end solutions tailored to our clients’ needs.
                        </p>
                        {/* <div className="text-center text-lg-start">
                            <a href="#" className="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                <span>Read More</span>
                                <i className="bi bi-arrow-right"></i>
                            </a>
                        </div> */}
                    </div>
                </div>
            <div className="col-lg-6 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200">
                <img src={about} className="img-fluid about-imgg" alt=""/>
            </div>
        </div>
    </div>
    </section>{/* =======End About Section ======= */}
            {/* ======= Features Section ======= */}
            <section id="features" className="features" >
                <div className='container'>
                <div className="section-title">
                    <h2>Services</h2>
                    <p>Our Services</p>
                    <span>Our tailored-fit services definitely suits all kind of customer needs. Our customer-first approach is the main motto which made us to come up with blended services that would cater all our customer requirements with a long-lasting satisfaction.</span>
                </div>
                <div className="d-lg-none nav-tabs-mobile mb-4" role="tablist">
                    {services.map((service) => (
                      <button
                        key={service.id}
                        className={`nav-link ${activeTab === service.id ? "active" : ""}`}
                        onClick={() => setActiveTab(service.id)}
                      >
                        {service.title}
                      </button>
                    ))}
                </div>
                <div className="row">
                    <div className="col-lg-3 order-1">
                        <ul className="nav nav-tabs flex-column" role="tablist">
                            {services.map((service)=>(
                                <li className="nav-item" role="presentation" key={service.id}>
                                    <button className={`nav-link ${activeTab === service.id ? "active" : ""}`} role="tab" aria-selected={activeTab === service.id} tabIndex={activeTab === service.id ? 0 : -1} onClick={()=>setActiveTab(service.id )}>{service.title}</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                
                  <div className="col-lg-9 mt-4 mt-lg-0 order-2">
                      <div className="tab-content">
                          {activeService&&<div className="tab-pane active show" id={activeService.id} role="tabpanel">
                              <div className="details-tab">
                                  <div className="details">
                                      <h3>{activeService.title}</h3>
                                      <p>{activeService.description}</p>
                                  </div>
                                  <div className="service-img">
                                      {<img src={activeService.img} className="img-fluid service-img" />}
                                  </div>
                              </div>
                          </div>}
                      </div>    
                  </div>    
                </div>  
            </div>
         </section>
            {/* =======End Features Section ======= */}



    <Info_Form/>

    </div>
    );
}

export default Home;