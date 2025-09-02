import About from "./components/About/about";
import Client from "./components/Client/Client";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OracleHCM from "./components/Services/OracleHCM/OracleHCM";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import OracleSCM from "./components/Services/OracleSCM/OracleSCM";
import OracleFinancials from "./components/Services/OracleFinancials/OracleFinancials";
import OracleOtherStreams from "./components/Services/OracleOtherStreams/OracleOtherStreams";
import AI_Data from "./components/Services/AI_Data/AI_Data";
import RPAServices from "./components/Services/RPAServices/RPAServices";
import UI_UX from "./components/Services/UI_UX_Design/UI_UX";
import MobileAppDevelopment from "./components/Services/MobileAppDevelopment/MobileAppDevelopment";
import WebDevelopment from "./components/Services/WebDevelopment/WebDevelopment";

import Arrow from "./components/Arrow/Arrow";
import Preloader from "./components/Preloader/Preloader";
import DigitalMarketing from "./components/Services/DigitalMarketing/DigitalMarketing";


const YVISoft = () => {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            easing:'ease-in-out',
            once:true,
            mirror:false
        })
    })
    return (
        <Router>
            <ScrollToTop/>
            <Header />
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/contact" element={<Contact/>} />
                
                <Route path="/oracle-hcm" element={<OracleHCM/>}/>
                <Route path="/oracle-scm" element={<OracleSCM/>}/>
                <Route path="/oracle-financials" element={<OracleFinancials/>}/>
                <Route path="/other-core-capabilities" element={<OracleOtherStreams/>}/>
                <Route path="/ai-and-data-platform" element={<AI_Data/>}/>
                <Route path="/rpa-services" element={<RPAServices/>}/>
                <Route path="/ui-ux-design" element={<UI_UX/>}/>
                <Route path="/web-development" element={<WebDevelopment/>}/>
                <Route path="/mobile-app-development" element={<MobileAppDevelopment/>}/>
                <Route path="/digital-marketing" element={<DigitalMarketing/>}/>
            </Routes>
            <Client/>
            <Footer/>
            <Arrow/>
        </Router>

    );
}

export default YVISoft;