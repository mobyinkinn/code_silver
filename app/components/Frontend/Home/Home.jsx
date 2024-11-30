import React from 'react'
import Banner from './parts/Banner'
import Footer from '../footer/Footer'
import Circles from './parts/Circles'
import TwoBannerSlider from './parts/TwoBannerSlider'
import Category from './parts/Category'
import ExploreCat from './parts/ExploreCat'

const Home = () => {
  return (
    <>
    <Banner/>
    <TwoBannerSlider/>
    <Category/>
    <ExploreCat/>
    <Circles/>
    </>
  )
}

export default Home