import { Routes, Route } from 'react-router-dom'
import './App.css'
import BillingWrapper from './components/Billing/BillingWrapper'
import Navbar from './components/Nav/Navbar'
import HomeWrapper from './components/Home/HomeWrapper'
import StatisticsWrapper from './components/Statistics/StatisticsWrapper'
import VoluntariesWrapper from './components/Billing/VoluntariesWrapper'
import LineChartPage from './components/Statistics/LineChart/LineChartPage'
import PieChartPage from './components/Statistics/PieChart/PieChartPage'

const  App=()=> {
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
            <Route path="/billing/voluntary" element={<VoluntariesWrapper />} />
            <Route path="/statistics" element={<StatisticsWrapper />} />
            <Route path="/statistics/linechart" element={<LineChartPage />} />
            <Route path="/statistics/piechart" element={<PieChartPage />} />
          </Routes>
        </div>
      </main>
    </>
  )
}

export default App
