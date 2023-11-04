
import './App.css'
import About from './Component/About'
import Contact from './Component/Contact'
import Destination from './Component/Destination'
import Features from './Component/Features'
import Footer from './Component/Footer'
import Home from './Component/Home'
import Nivbar from './Component/Nivbar'

function App() {

  return (
    <>
      <div>
        <Nivbar/>
        <main>
          <div id='home'>
            <Home/>
          </div>

          <div id='features'>
            <Features/>
          </div>

          <div id='destination'>
            <Destination/>
          </div>

          <div id='about'>
            <About/>
          </div>

          <div id='contact'>
            <Contact/>
          </div>

        </main>
        
        <Footer/>
      </div>
    </>
  )
}

export default App
