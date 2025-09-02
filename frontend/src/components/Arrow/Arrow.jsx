import React, { useEffect, useState } from 'react'
import './Arrow.css'

const Arrow = () => {
    const [visibility,setVisibility]=useState(false);
    useEffect(()=>{
        const onScroll=()=>setVisibility(window.scrollY>100)
        window.addEventListener('scroll',onScroll)
        onScroll();
        return()=>{
            window.removeEventListener('scroll',onScroll)
        };

    },[]);
    function handleClick(){
        window.scrollTo({top:0,behavior:'smooth'})
    }
  return (
    <div>
      <a href="#" className={`scroll-top d-flex align-items-center justify-content-center ${visibility?'active':''}`} onClick={handleClick}><i className="bi bi-arrow-up-short"></i></a>
    </div>
  )
}

export default Arrow