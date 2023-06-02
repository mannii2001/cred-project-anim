import React from 'react'
import './header.css';
import Button from '../Button/Button';

const Header = () => {
  return (
    <div className="header_section-wrapper">
      <div className="flex absolute-center header-claim-label">
        <div>pay credit card bill. earn guaranteed rewards.</div>
        <div className="claim">
          
          claim now
          <img
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            alt=""
            className="claim-arrow"
          />
        </div> 
      </div>
      <div className="flex absolute-center flex-col header-section max-width">
        <div className="header-heading">
          rewards for paying credit card bills.
        </div>
        <div className="header-subHeading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Download CRED" />
      </div>
    </div>
  )
}

export default Header
