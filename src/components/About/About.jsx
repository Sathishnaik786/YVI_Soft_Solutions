import Banner from "../Banner/Banner";
import './About.css'
import OurApproach from '../../assets/img/OurApproach.png'
import './About.css'
import Video from "../Video/Video";
import BannerThree from "../Banner3/BannerThree";

const About = () => {
    return (
        <div >
            {/* <Banner headingText='Where Innovation Transforms into Action'
            content='YVI Soft is a results-driven information technology firm dedicated to providing distinctive, dependable, and innovative software solutions.'
            imageName='Innovation.jpg' /> */}
            <BannerThree headingText='Where Innovation Transforms into Action'
                        content="YVI Soft is a results-driven information technology firm dedicated to providing distinctive, dependable, and innovative software solutions."
                        videoName="About.mp4" />
            <Video/>
            <section id="values" className="values" style={{backgroundColor: '#3B3B3B'}}>
                <div className="container aos-init aos-animate" data-aos="zoom-out">
                    <div className="section-title">
                        <h2>Our Values</h2>
                        <p style={{color:'white'}}>Core Values</p>
                    </div>
                    <div className="container aos-init aos-animate" data-aos="fade-up"  style={{backgroundColor:' #3B3B3B'}}>
                <header className="section-title"></header>

    <div className="row">

      <div className="col-lg-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
        <div className="box">
          <h3 style={{color:'#FFCD6D'}}>Integrity </h3>
          <p style={{color:'white'}}>Demonstrating honesty, transparency, ethical conduct, and accountability in all situations, thereby fostering trust and credibility.</p>
        </div>
      </div>

      <div className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
        <div className="box">
          <h3 style={{color:'#FFCD6D'}}>Innovation</h3>
          <p style={{color:'white'}}>Supporting creativity, experimentation, continual improvement, and openness to rethinking traditional methods.
            </p>
        </div>
      </div>

      <div className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
        <div className="box">
          <h3 style={{color:'#FFCD6D'}} >Collaboration</h3>
          <p style={{color:'white'}} >Encouraging teamwork, open communication, mutual support, and aligned objectives to achieve collective success.</p>
        </div>
      </div>

     

    </div>

    <div className="row" >
      <div className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
        <div className="box">
          <h3 style={{color:'#FFCD6D'}}  >Respect</h3>
          <p style={{color:'white'}} >Valuing every individual—whether team members, partners, or clients—by treating others with dignity and appreciating their unique contributions.</p>
        </div>
      </div>

      <div className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
        <div className="box" >
          <h3 style={{color:'#FFCD6D'}} >Results-driven</h3>
          <p style={{color:'white'}} >Committing to achieving high-quality outcomes, demonstrating ownership, and maintaining accountability for performance.</p>
        </div>
      </div>
      <div className="col-lg-4 mt-4 mt-lg-0 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
        <div className="box" >
          <h3 style={{color:'#FFCD6D'}} >Social Responsibility</h3>
          <p style={{color:'white'}} >Upholding ethical principles beyond profit, including community engagement, sustainability efforts,  and giving back to society</p>
        </div>
      </div>
    </div>
    </div>
  </div>

</section>
{/* -- End Values Section -- */}
        {/*!-- ======= F.A.Q Section ======= --*/}
    <section id="faq" className="faq" style={{backgroundColor: '#3B3B3B'}}>
      <div className="container" data-aos="fade-up">
      <div className="section-title">
          <h2> Our process</h2>
          <p style={{color:'white'}}>GENERIC APPROACH</p>
        </div>
        <div className="row gy-4">

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content px-xl-5">
              <h3 style={{color:'white'}}> <strong>We provide flawless services through our approach</strong></h3>
              {/* <!--<h3> For your reference!</h3>--> */}
            </div>

            <div className="accordion accordion-flush px-xl-5" id="faqlist">

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="200">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-1">
                   {/* <!-- <i className="bi bi-question-circle question-icon"></i>--> */}
                    REQUIREMENTS AND CONSULTING
                  </button>
                </h3>
                <div id="faq-content-1" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Learning your business processes to understand the objectives you want to achieve and provide the right clear roadmap with KPIs and timelines. Defining metrics to set the project up for success. 

                  </div>
                </div>
                </div>{/* {/* <!-- # Faq item--> */} 

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="300">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-2">
                    {/* <!--<i className="bi bi-question-circle question-icon"></i>--> */}
                    DEVELOPMENT
                  </button>
                </h3>
                <div id="faq-content-2" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Configuration, customization, and technical work that is required to automate the business processes with appropriate IT services.

                  </div>
                </div>
              </div>{/* <!-- # Faq item--> */}

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="400">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-3">
                    {/* <!--<i className="bi bi-question-circle question-icon"></i>--> */}
                    TESTING
                  </button>
                </h3>
                <div id="faq-content-3" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Thoroughly checking the system to make sure it complies with the agreed-upon plan and does what it is supposed to.

                  </div>
                </div>
              </div>{/* <!-- # Faq item--> */}

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="500">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-4">
                    {/* <!--<i className="bi bi-question-circle question-icon"></i>--> */}
                    RELEASE
                  </button>
                </h3>
                <div id="faq-content-4" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Rolling out your solution and making sure the adoption process is hassle-free for business users.


                  </div>
                </div>
              </div>{/* <!-- # Faq item--> */}

              <div className="accordion-item" data-aos="fade-up" data-aos-delay="600">
                <h3 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq-content-5">
                    {/* <!--<i className="bi bi-question-circle question-icon"></i>--> */}
                    ENHANCEMENT  AND MAINTENANCE
                  </button>
                </h3>
                <div id="faq-content-5" className="accordion-collapse collapse" data-bs-parent="#faqlist">
                  <div className="accordion-body">
                    Release is not the end of our collaboration. We will continue working with you and help you grow the system so it can bring you even more value in the long term. 

                  </div>
                </div>
              </div>{/* <!-- # Faq item--> */}

            </div>

          </div>

         {/* <!-- <div className="col-lg-2 align-items-stretch order-1 order-lg-4 img" style='background-image: url("assets/img/OurApproach.png");'>&nbsp;</div>
        </div>--> */}

        <div className="col-xl-2 col-md-4 d-flex aos-init aos-animate" data-aos="zoom-out" data-aos-delay="800" >
      <img src={OurApproach}  className="img-fluid animated" alt=""/>
    </div>

      </div>
      </div>
    </section>
    <br/>

    </div>
    );
}
export default About;