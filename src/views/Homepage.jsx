import React from 'react'
import Hero from '../components/Hero'
import Brands from '../components/Brands'
import Features from '../components/Features'
import Carousel from '../components/Carousel'
import Details from '../components/Details'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Subscribe from '../components/Subscribe'

const Homepage = () => {
  return (
    <>
        <Hero />
        <Brands />
        <Features />
        <Carousel />
        <Details />
        <Testimonials />
        <FAQ />
        <Subscribe />
    </>
  )
}

export default Homepage