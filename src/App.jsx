import './assets/css/main.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Footer from './components/Footer'
import Features from './components/Features'
import Carousel from './components/Carousel'
import Details from './components/Details'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Subscribe from './components/Subscribe'
import ContactUs from './components/ContactUs'
import ContactMap from './components/ContactMap'



//import { useState } from 'react'

const App = () => {
  //const [count, setCount] = useState(0)

  /*
  <Hero />
  <Brands />
  <Features />
  <Carousel />
  <Details />
  <Testimonials />
  <FAQ />
  <Subscribe />
  */

  /*
  <main>
      <ContactUs />
      <ContactMap />
  </main>
  */

  return (
    <>
      <div className="wrapper">
        <Header />
        <main>
            <Hero />
            <Brands />
            <Features />
            <Carousel />
            <Details />
            <Testimonials />
            <FAQ />
            <Subscribe />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
