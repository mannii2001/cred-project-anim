import { useState } from 'react';
import React from 'react'
import './mobilescroll.css';
import ScreenTest from './ScreenTest';

const scrollData = [
    {
      heading: "we’ve got your back.",
      description:
        "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
      img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png",
    },
    {
      heading: "begin your winning streak.",
      description:
        "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
      img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png",
    },
    {
      heading: "for your electric taste.",
      description:
        "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
      img: "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png",
    },
  ];
  

const MobileScroll = () => {
    const [currentImage, setCurrentImage] = useState(0);
    return (
      <div className="max-width flex mobile-scroll">
        <div className="scroll-fullScreen-wrapper">
        {/*  eslint-disable-next-line */}
          {scrollData.map((screen, index) => (
              
            <div className="scroll-fullScreen">
             
              <ScreenTest
                screen={screen}
                index={index}
                setCurrentImage={setCurrentImage}
              />
            </div>
          ))}
        </div>
        <div className="mobile-mockup-wrapper non-mobile">
          <div className="mobile-mockup">
            <div className="mobile-mockup-screen flex absolute-center">
              <img
                src={scrollData[currentImage].img}
                alt=""
                className="mobile-screen-img slide-in-right"
                key={scrollData[currentImage].img}
              />
            </div>
          </div>
        </div>
      </div>
  )
}

export default MobileScroll
