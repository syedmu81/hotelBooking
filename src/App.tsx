import './App.css'
import Navbar from './components/Navbar'
import CoverPage from './components/CoverPage'
import TrendingBar from './components/TrendingBar'
import CoroselBar from './components/CoroselBar'
import PopularDestinations from './components/ui/PopularDestinations'
import SubscribeUs from './components/SubscribeUs'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <div className='bg-gray-100'>
        <Navbar/>
        <CoverPage/>
        <TrendingBar />
        <CoroselBar />
        <PopularDestinations />
        <SubscribeUs />
        <Footer />
        </div>
        
    </>
  )
}

export default App
