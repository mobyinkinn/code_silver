import React from 'react'
import Banner from './parts/Banner'
import Footer from '../footer/Footer'
import Circles from './parts/Circles'
import TwoBannerSlider from './parts/TwoBannerSlider'
import Category from './parts/Category'
import ExploreCat from './parts/ExploreCat'
import Clients from './parts/Clients'
import DesignStudio from './parts/DesignStudio'
import Tradition from './parts/Tradition'
import Contact from './parts/Contact'

const Home = () => {
  return (
    <>
    <Banner/>
    <TwoBannerSlider/>
    <Category/>
    <ExploreCat/>
    <DesignStudio/>
    <Tradition/>
    <Clients/>
    <Contact/>
    <Circles/>
    </>
  )
}

export default Home