import { Routes, Route } from 'react-router-dom'
import './App.css'
import BillingContainer from './components/Billing/container.component'
import Navbar from './components/Nav/navbar.component'
import HomeContainer from './components/Home/container.component'
import StatistisContainer from './components/Statistics/container.component'
function App() {
  return (
    <>

      <main className='d-flex'>

        <div className='aside-menu d-flex'>
          <Navbar />
        </div>
        <div className='main-content'>
          <Routes>
            <Route path="/" element={<HomeContainer />} />
            <Route path="/billing" element={<BillingContainer />} />
            <Route path="/statistics" element={<StatistisContainer />} />
          </Routes>
        </div>
      </main>

    </>
  )
}

export default App
