import IndexImage from './../../assets/img/Index.jpg';
import InnovationImage from './../../assets/img/Innovation.jpg';
import ContactUsImage from '../../assets/img/ContactUs.jpg'
import OracleHCM from '../../assets/img/OracleHCM.jpeg'
import OracleSCM from '../../assets/img/OracleSCM.jpeg'
import OracleFinancials from '../../assets/img/Oracle-Financials.jpg'
import OracleERp from '../../assets/img/OracleERp.png'
import DataAi from '../../assets/img/DataAI.png'
import RPAServices from '../../assets/img/RPAServices.jpg'
import UX from '../../assets/img/UX.jpg'
import MobileAppDev from '../../assets/img/MobileAppDev.jpg'
import WebAppDev from '../../assets/img/WebAppDev.jpg'

const Banner = ({ headingText, content, imageName }) => {

    const images = {
        'Index.jpg': IndexImage,
        'Innovation.jpg': InnovationImage,
        'ContactUs.jpg': ContactUsImage,
        'OracleHCM.jpg' : OracleHCM,
        'OracleSCM.jpeg' : OracleSCM,
        'OracleFinancials.jpg' : OracleFinancials,
        'OracleERp.png' : OracleERp,
        'DataAi.png' : DataAi,
        'RPAServices.jpg' : RPAServices,
        'UX.jpg' : UX,
        'MobileAppDev.jpg' : MobileAppDev,
        'WebAppDev.jpg' : WebAppDev
    };
    return (
        <section id="hero-animated" className="hero-animated d-flex align-items-center" style={{ backgroundColor: 'lightblue' }}>
            <div className="container d-flex flex-column justify-content-center aos-init aos-animate" data-aos="zoom-out">
                <div className="row gy-4">
                    <div className="col-xl-8 col-md-6 d-flex aos-init aos-animate align-items-center" data-aos="zoom-out">
                        <div>
                            <h2>{headingText}</h2>
                            <p>{content}</p>

                        </div>
                    </div>
                    <div className="col-xl-4 col-md-6 d-flex aos-init aos-animate" data-aos="zoom-out">
                        <img src={images[imageName]} className="img-fluid animated" />
                    </div>
                </div>
            </div>

        </section>
    );
}

export default Banner;