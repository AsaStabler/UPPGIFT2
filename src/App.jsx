import './assets/css/main.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Brands from './components/Brands'
import Footer from './components/Footer'
import Features from './components/Features'
import Carousel from './components/Carousel'
import Details from './components/Details'
import Testimonials from './components/Testimonials'
//import { useState } from 'react'

const App = () => {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className="wrapper">
        <main>
          <Header />
          <Hero />
          <Brands />
          <Features />
          <Carousel />
          <Details />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
