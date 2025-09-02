import React from 'react'
import Video from '../Video/Video'
import Info_Form from '../Contact Info & Form/Info_Form'
import BannerThree from '../Banner3/BannerThree'

const Contact = () => {
  return (
    <div>
      <BannerThree headingText='Contact Us'
              content="Receive customized solutions, professional guidance, and accurate estimates."
              videoName="Contact.mp4"/>
      <Video/>
      <Info_Form/>
    </div>
  )
}

export default Contact
