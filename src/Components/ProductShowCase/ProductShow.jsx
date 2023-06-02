import React, { useEffect, useRef, useState } from 'react'
import './product.css';

const ProductShow = () => {
    const[showAnimation,setShowAnimation] = useState(false);
    const ref = useRef(null);
    const toggleAni = (e) =>{
      if(e[0].isIntersecting){
        setShowAnimation(true);
      }
        
    }
    const options = { 
        root:null,
        rootMargin:"10px",
        threshold:0.5,
    };

    useEffect(()=>{
      
    const oberver = new IntersectionObserver(toggleAni,options);

        if(!showAnimation){
          if(ref.current){
            oberver.observe(ref.current);
          }
        }
        return ()=>{
          if(ref.current){
            // eslint-disable-next-line
            oberver.unobserve(ref.current);
          }
        }
    })
  return (
    <div className={`product-showcase ${showAnimation ? "scale-in-bottom" : ""}`} ref={ref}>
      {showAnimation && <div className='showcase-wrapper'>
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png" alt=""  className='showcase-ui showImg-1'/>
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png" alt=""  className='showcase-ui showImg-2'/>
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png" alt=""  className='showcase-ui showImg-3'/>
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png" alt="" className='showcase-ui showImg-4'/>
        <img src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png" alt="" className='showcase-ui showImg-5'/>
      </div>}
    </div>
  )
}

export default ProductShow;
