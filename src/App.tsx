import { Routes, Route } from 'react-router-dom'
import './App.css'
import BillingWrapper from './components/Billing/BillingWrapper'
import Navbar from './components/Nav/Navbar'
import HomeWrapper from './components/Home/HomeWrapper'
import StatistisContainer from './components/Statistics/StatistisContainer'

function App() {
  return (
    <>
      <main className='d-flex'>
        <div className='aside-menu d-flex'>
          <Navbar />
        </div>
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<HomeWrapper />} />
            <Route path="/billing" element={<BillingWrapper />} />
            <Route path="/statistics" element={<StatistisContainer />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
