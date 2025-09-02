import React from 'react'
import Home from '../../assets/img/YVI.mp4'
import About from '../../assets/img/About.mp4'
import Contact from '../../assets/img/Contact.mp4'
import MobileAppDevelopment from '../../assets/img/ServiceVideos/Mobile_App_Development.mp4'
import AIData from '../../assets/img/ServiceVideos/AI_and_Data_Platform.mp4'
import OracleFinancials from '../../assets/img/ServiceVideos/Oracle_Financials.mp4'
import OracleHCM from '../../assets/img/ServiceVideos/Oracle_HCM.mp4'
import OracleSCM from '../../assets/img/ServiceVideos/Oracle_SCM.mp4'
import OtherOracleStreams from '../../assets/img/ServiceVideos/Other_Oracle_Streams.mp4'
import RPAServices from '../../assets/img/ServiceVideos/RPA_Services.mp4'
import UiUxDesign from '../../assets/img/ServiceVideos/ui-ux-design.mp4'
import WebDevelopment from '../../assets/img/ServiceVideos/Web_Development.mp4'

import './BannerThree.css'

const BannerThree = ({headingText,content,videoName}) => {
  const videos={
    'YVI.mp4' : Home,
    'About.mp4' : About,
    'Contact.mp4' : Contact,
    'Mobile_App_Development.mp4': MobileAppDevelopment,
    'AI_and_Data_Platform.mp4': AIData,
    'Oracle_Financials.mp4': OracleFinancials,
    'Oracle_HCM.mp4': OracleHCM,
    'Oracle_SCM.mp4': OracleSCM,
    'Other_Oracle_Streams.mp4': OtherOracleStreams,
    'RPA_Services.mp4': RPAServices,
    'ui-ux-design.mp4': UiUxDesign,
    'Web_Development.mp4': WebDevelopment
  }
  return (
    <div>
      <div className='banner'>
      <video src={videos[videoName]} autoPlay loop muted/>
      <div className="video-overlay"/>
      <div className="contentt">
        <h2>{headingText}</h2>
        <p>{content}</p>
      </div>
    </div>
    </div>
  )
}

export default BannerThree
