
import './App.css'
import Hero from './components/Hero__part/Hero'
import Services from './components/Service__part/Services'
import WheretoBuy from './components/WheretoBuy_part/WheretoBuy'
import AppBanner from './components/AppBanner_part/AppBanner.jsx'
import Footer from './components/Footer__Part/Footer.jsx'

function App() {
 

  return (
    <>
      <h1 className='overflow-x-hidden'>
        <Hero/>
        <Services/>  
        <WheretoBuy/>   
        <AppBanner/>   
        <Footer/>               
      </h1>
      
    </>
  )
}

export default App
