import React from 'react'
import OracleHr from '../../../../assets/img/Oracle_hr.jpg';
import OracleRT from '../../../../assets/img/oracle_RT.jpeg';
import OraclePR from '../../../../assets/img/oracle_PR.jpg';
import HRHelpDesk from '../../../../assets/img/Services-icons/hr-helpdesk.jpg';
import RPAAll_Industries from '../../../../assets/img/RPAAll_Industries.jpeg'

const Left = ({headingText,content,module,modules,image}) => {
  const images = {
          'Oracle_hr.jpg':OracleHr,
          'Oracle_RT.jpg':OracleRT,
          'Oracle_PR.jpg':OraclePR,
          'HR_HelpDesk.jpg':HRHelpDesk,
          'RPAAll_Industries.jpeg':RPAAll_Industries
      };
  return (
    <div>
        <div className="col-xl-12 col-md-6 d-flex flex-wrap aos-init aos-animate justify-content-between align-items-center px-xl-5 p-5 bg-pink_light" data-aos="zoom-out">
            <div className="col-xl-6 col-md-6 d-flex aos-init aos-animate" data-aos="zoom-out">
              <div className="about-item position-relative">
                {headingText && <h4><span  className="stretched-link">{headingText}</span></h4>}
                {content && <p>
                 {content}
                </p>}
                {module && <b>Modules</b>}
                {modules&&modules.length-1>0&&<p className="service_more">
                  {modules.map((item,index)=>(
                  <span key={index}>
                    {item}{index<modules.length-1?", ":""}
                  </span>))
                  }
                </p>}
  
              </div>
            </div>
            <div className="col-xl-5 col-md-6 d-flex aos-init aos-animate" data-aos="zoom-out">
              <img src={images[image]} className="img-fluid" alt=""/>
            </div>
        
          </div>
    </div>
  )
}

export default Left
