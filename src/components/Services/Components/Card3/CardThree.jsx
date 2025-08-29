import React from 'react'

const CardThree = ({headingText,content,classname1,classname2,dataAOS}) => {
  return (
    <div className={`${classname2 ||'col-xl-6'} col-md-6 d-flex aos-init aos-animate`} data-aos="zoom-out" data-aos-delay={dataAOS||0}>
            <div className={`about-item position-relative ${classname1 ||'p-3 box_border'}`}>
              <h4><span  className="stretched-link">{headingText}</span></h4>
              <p>
                {content}
              </p>
                
            </div>
          </div>
  )
}

export default CardThree
