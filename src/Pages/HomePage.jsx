import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Header from '../Components/Header/Header'
import ProductShow from '../Components/ProductShowCase/ProductShow'
import FeelSpecial from '../Components/feelSpecial/FeelSpecial'
import Brands from '../Components/Brands/Brands'
import Experience from '../Components/Experience/Experience'
import MobileScroll from '../Components/MobileScroll/MobileScroll'
import Window from '../Components/Window/Window'
import Security from '../Components/Security/Security'
import AppRating from '../Components/Apprating/AppRating'

const HomePage = () => {
  return (
    <>
      <Navbar/>
      <Header/>
      <ProductShow/>
      <FeelSpecial/>
      <Brands/>
      <Experience/>
      <MobileScroll/>
      <div className='non-mobile'> <Window/> </div>
      <Security/>
      <AppRating/>
    </>
  )
}

export default HomePage
