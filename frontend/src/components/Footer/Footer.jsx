import React from 'react'
import {Link} from 'react-router-dom'
import X from '../../assets/img/X.png'
import Icon from '../../assets/img/footer-icon.png'
import yviLogo from '../../assets/img/YVI_Logo.png'
import './Footer.css'


const Footer = () => {
  return (
    <footer id="footer" className="footer" >

    <div className="footer-content" style={{backgroundColor: 'black'}}>
      <div className="container" >
        <div className="row">

          <div className="col-lg-4 col-md-6">
          
            <div className="footer-info">
           
              <div className="card-header">
                <img src={yviLogo} className="logo"/>
                
              </div>
              
              <p>
                <b>India</b><br/>
                 Hyderabad, Telangana   <br/><br/>

                
                <strong>Phone:</strong> +91-8317622417<br/>
                <strong>Email:</strong> info@yvisoft.com<br/>
              </p>
            </div>
          </div>
          <div className="col-lg-1 col-md-6 footer-links"></div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Core Capabilities</h4>
            <ul>
                <li><i className="bi bi-chevron-right"></i> <Link to="/oracle-hcm">Oracle HCM</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/oracle-scm">Oracle SCM</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/oracle-financials">Oracle Financials</Link></li>
                <li><i className="bi bi-chevron-right"></i><Link to="/other-core-capabilities">Other Core Capabilities</Link></li>
                </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4> Other  Capabilities</h4>
            <ul>

              <li><i className="bi bi-chevron-right"></i> <Link to="/ai-and-data-platform">Data and AI Solutions</Link></li>
              <li><i className="bi bi-chevron-right"></i>  <Link to="/rpa-services">RPA Services</Link> </li>
              <li><i className="bi bi-chevron-right"></i> <Link to="/digital-marketing">Digital Marketing</Link></li>
               <li><i className="bi bi-chevron-right"></i> <Link to="/ui-ux-design">UX/UI Design</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/web-development">Web Development</Link></li>
                <li><i className="bi bi-chevron-right"></i> <Link to="/mobile-app-development">Mobile Development</Link></li>
               
                
                </ul>
          </div>

          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Insights</h4>
            <ul>
              <li><i className="bi bi-chevron-right"></i> <Link className="nav-link" to="/">Home</Link></li>
              <li><i className="bi bi-chevron-right"></i> <Link className="nav-link scrollto" to="/about">Explore YVI Soft</Link></li>
              
            </ul>
          </div>
     

        </div>
      </div>
    </div>

    <div className="footer-legal text-center" style={{backgroundColor: 'grey'}}>
      <div className="container d-flex flex-column flex-lg-row justify-content-center justify-content-lg-between align-items-center">

        <div className="d-flex flex-column align-items-center align-items-lg-start">
          <div className="copyright">
            <strong><span>&copy; 2025 YVI Soft Solutions | All rights reserved.</span></strong>
         </div>
          <div className="credits">
            
          </div>
        </div>

        <div className="social-links order-first order-lg-last mb-3 mb-lg-0 d-flex align-items-center">
          <strong><span>Follow us:</span></strong>  
          <a href="https://www.linkedin.com/company/yvi-soft-solutions-private-limited/" target="_blank" className="linkedin"><i className="bi bi-linkedin"></i></a> 
          <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
          <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          <a href="#" className="twitter"><img src={X} alt="" /></a>
           
        </div>

      </div>
    </div>

  </footer>
  );
}

export default Footer
