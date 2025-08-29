import React from 'react'
import './DigitalMarketing.css'
import BannerThree from '../../Banner3/BannerThree'
import CardOne from '../Components/Card1/CardOne'
import ContactUs from '../Components/ContactUS/ContactUs'
import DigitalMarketingVid from '../../../assets/img/Digital Marketing.mp4'
import DigiBabuLogo from '../../../assets/img/DIZIBABU.png'

const DigitalMarketing = () => {
  return (
    <div className='digital'>
        
       
        <div className='banner4'>
            <video src={DigitalMarketingVid} autoPlay loop muted/>
            <div className="video-overlayy"/>
                <div className="contenttt">
                    <h2>Welcome to Dizi Babu Soft Solutions, the digital marketing division of YVI Soft</h2>
                    <p>We specialize in innovative digital marketing strategies, utilizing Generative AI to develop highly effective, data-driven, and personalized campaigns. Our goal is to enhance your digital presence, foster meaningful engagement with your audience, drive growth, and deliver measurable return on investment.</p>
                </div>
                <div className="image-section">
                   <img src={DigiBabuLogo} alt="Marketing" />
                </div>
            </div>
        <section id="featured-services" class="featured-services">

            <div class="container">
                <div class="section-title">
                <h2>Our Services </h2>
                <p>Include</p>
                </div>

            <div id="values" class="values">

                <div class="container aos-init aos-animate" data-aos="fade-up">
                
                    <div class="row">
                
                    <div class="col-lg-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
                        <div class="box" style={{backgroundColor: 'lightgrey', textAlign: 'left'}}>
                            <p class="imp_msg">	At Dizi Babu Soft Solutions, we combine strategic expertise with advanced Generative AI technology to provide a comprehensive range of digital marketing services  </p>
                        </div>
                    </div>
                    </div>
                </div> 
                </div>
                <div class="row gy-4">
                    <CardOne headingText='AI-Generated Content Development'
                             content="Utilizing Generative AI tools, we produce high-quality, engaging content at scale, including blog articles, social media posts, email newsletters, and advertisement copy, ensuring alignment with your brand voice across all channels."
                             image="AIGeneratedContentDevelopment.jpg"
                             dataAOS={200}/>
                    <CardOne headingText='Personalized Marketing Strategies'
                             content="By analysing customer data with AI, we create targeted marketing campaigns tailored to individual preferences, enabling more relevant messaging and improved customer engagement and loyalty."
                             image="PersonalizedMarketingStrategies.jpg"
                             dataAOS={400}/>
                    <CardOne headingText='Predictive Analytics and Campaign Planning'
                             content="Our AI models forecast market trends, customer behaviour, and campaign performance, allowing us to develop proactive strategies that maintain your competitive advantage and optimize marketing budgets for maximum effectiveness."
                             image="PredictiveAnalyticsandCampaignPlanning.jpg"
                             dataAOS={400}/>
                    <CardOne headingText='Automated Search Engine Optimization'
                             content="We leverage AI to streamline and enhance SEO efforts by identifying high-value keywords, optimizing on-page content, and analysing backlink opportunities to improve search engine rankings and increase organic traffic."
                             image="AutomatedSearchEngineOptimization.jpg"
                             />
                    <CardOne headingText='Creative Asset Production'
                             content="From dynamic banner ads to custom video scripts and visual concepts, our Generative AI capabilities enable us to produce a variety of creative assets efficiently, ensuring your campaigns are visually appealing and distinctive."
                             image="CreativeAssetProduction.jpg"
                             dataAOS={400}/>
                </div>
            </div>
        </section>
        <section id="featured-services" class="featured-services">

      <div class="container">
        <div class="section-title">
            <h2>Digital Solutions </h2>
            <p>Why Choose Us?</p>
        </div>
        <div class="row gy-4">
            <CardOne headingText='Expertise in Generative AI'
                     content="Our team has specialized knowledge in applying Generative AI to digital marketing, providing you with a competitive edge."
                     image="ExpertiseInGenerativeAI.jpg"/>
            <CardOne headingText='Commitment to Innovation'
                     content="We continually integrate the latest advancements in AI to offer innovative, cutting-edge marketing solutions."
                     image="CommitmentToInnovation.jpg"
                     dataAOS={200}/>
            <CardOne headingText='Scalable Solutions'
                     content="Our AI-enabled methods allow us to scale your marketing efforts seamlessly, regardless of your business size, without sacrificing quality."
                     image="ScalableSolutions.jpg"
                     dataAOS={400}/>
            <CardOne headingText='Data-Driven Approach'
                     content="We base our strategies on real-time data and AI insights, ensuring that every campaign is measurable and effective."
                     image="DataDrivenApproach.jpg"
                     dataAOS={400}/>

        </div>
        </div>
        </section>
        <ContactUs headingText="Let's Elevate Your Digital Presence"
                   content="If you are prepared to leverage Generative AI to enhance your digital marketing efforts, partner with Dizi Babu Soft Solutions. We are dedicated to creating intelligent, impactful campaigns that leave a lasting impression."/>
    </div>
    
  )
}

export default DigitalMarketing
