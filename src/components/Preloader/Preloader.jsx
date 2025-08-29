import React, { useState, useEffect } from 'react'
import './Preloader.css'

const Preloader = () => {
    const [loading, setLoading] = useState(true);
    if(loading){
            <Preloader/>
    }

    useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
    }, []);
  return (
    <div className="preloader">
    </div>
  )
}

export default Preloader
