import { Link } from "react-router-dom";
import './Header.css'
import yviLogo from '../../assets/img/YVI_Logo.png'
import MobileMenu from "./MobileMenu";
// import { useEffect, useState  } from "react";

const Header = () => {
  // const [sticky,setSticky]=useState(false);
  // useEffect(()=>{
  //   const handleScroll=()=>{
  //     window.scrollY>50?setSticky(true):setSticky(false);
  //   }
  //   window.addEventListener('scroll',handleScroll)
  //   return () => {
  //   window.removeEventListener('scroll', handleScroll);
  // };
  // },[]);

  return (
    <header id="header" className="header fixed-top white-nav" data-scrollto-offset="0">
      <div className="container d-flex align-items-center justify-content-between">

        <Link to="/" className="logo d-flex align-items-center scrollto me-auto me-lg-0">
          <img src={yviLogo} alt="YVI" />
        </Link>

        <nav id="navbar" className='navbar'>
          <ul>
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link scrollto" to="/about">Explore YVI Soft</Link></li>
            <li className="dropdown"> {/*'megamenu'for bigger dropdown */}
              <a href="#"><span>Services</span> <i className="bi bi-chevron-down dropdown-indicator"></i></a>
              <ul>
                
                  <li><Link to="/oracle-hcm">Oracle HCM</Link></li>
                  <li><Link to="/oracle-scm">Oracle SCM</Link></li>
                  <li><Link to="/oracle-financials">Oracle Financials</Link></li>
                  <li><Link to="/other-core-capabilities">Other Core Capabilities</Link></li>
                  <li><Link to="/ai-and-data-platform">Data and AI Solutions</Link></li>
                  <li><Link to="/rpa-services">RPA Services</Link></li>
                  <li><Link to="/digital-marketing">Digital Marketing</Link></li>
                  <li><Link to="/ui-ux-design">UX/UI Design</Link></li>
                  <li><Link to="/web-development">Web Development</Link></li>
                  <li><Link to="/mobile-app-development">Mobile Development</Link></li>
                  
                
              </ul>
            </li>
            <li><Link className="nav-link scrollto bttn" to="/contact">Contact Us</Link></li>
          </ul>
          
        </nav>
        <div className="mobilemenu">
          <MobileMenu/>
        </div>
      </div>
    </header>
  );
}

export default Header;