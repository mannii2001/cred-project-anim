import { useState,useRef,useEffect } from "react"
import React from 'react';

const ScreenTest = ({screen,setCurrentImage,index}) => {
    const[showAnimation,setShowAnimation] = useState(false);
    const ref = useRef(null);
    const toggleAni = (e) =>{
      if(e[0].isIntersecting){
        setShowAnimation(true);
        setCurrentImage(index);
      }
        
    }
    const options = { 
        root:null,
        rootMargin:"10px",
        threshold:0.6,
    };

    useEffect(()=>{
      
    const oberver = new IntersectionObserver(toggleAni,options);

       
          if(ref.current){
            oberver.observe(ref.current);
          }
        
        return ()=>{
          if(ref.current){
            // eslint-disable-next-line
            oberver.unobserve(ref.current);
          }
        }
    })
  return (
    <div className={`screen-text ${showAnimation ? "text-visible" : "" }`} ref={ref}>
        <div className='screen-heading'>{screen.heading}</div>
        <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={screen.img}
              alt=""
              className="mobile-screen-img"
            />
          </div>
        </div>
      </div>
      <div className='screen-description'>{screen.description}</div>
    </div>
  )
}

export default ScreenTest
