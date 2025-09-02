import React from 'react'
import './CardTwo.css'

const CardTwo = ({headingText,content,dataAOS}) => {
  return (
    <div className="col-lg-3 aos-init aos-animate" data-aos="fade-up" data-aos-delay={dataAOS||0}>
            <div className="cardtwo">
              <h3>{headingText}</h3>
              <p>{content}
                </p>
            </div>
    </div>
  )
}

export default CardTwo
