import React from 'react'
import Ba from '../../../../assets/img/Services-icons/ba.svg'
import Design from '../../../../assets/img/Services-icons/design.svg'
import Architecture from '../../../../assets/img/Services-icons/architecture.svg'
import FrontEnd from '../../../../assets/img/Services-icons/front-end.svg' 
import BackEndRed from '../../../../assets/img/Services-icons/back-end-red.svg'
import Integration from '../../../../assets/img/Services-icons/integration.svg'
import TestingType from '../../../../assets/img/Services-icons/testing-type.svg'
import HelpDesk from '../../../../assets/img/Services-icons/help-desk_1.svg'
import Support from '../../../../assets/img/Services-icons/support.svg'

const CardFour = ({headingText,content,image,dataAOS}) => {
    const images={
        'ba.svg': Ba,
        'design.svg': Design,
        'architecture.svg': Architecture,
        'front-end.svg': FrontEnd,
        'back-end-red.svg': BackEndRed,
        'integration.svg': Integration,
        'testing-type.svg': TestingType,
        'help-desk_1.svg': HelpDesk,
        'support.svg': Support
    }
  return (
    <div className="col-xl-4 col-md-6 d-flex aos-init aos-animate" data-aos="zoom-out" data-aos-delay={dataAOS||0}>
            <div className="service-item position-relative">
              <div className="icon"> <img src={images[image]} className="img-fluid" alt=""/></div>
              <h4><a href="" className="stretched-link">{headingText}</a></h4>
              <p>{content}
              </p>
                
            </div>
          </div>
  )
}

export default CardFour
