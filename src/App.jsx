import './assets/css/main.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './views/Homepage'
import Contact from './views/Contact'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {

  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>  
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/Contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
