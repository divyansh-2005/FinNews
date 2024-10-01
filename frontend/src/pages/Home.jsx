import React from 'react'
import Header from '../components/Header/Header'
import Herosection from '../components/Herosection/Herosection'
import Finiance from '../components/All-latest-finiancial-updates/Finiance'
import GovSchemes from '../components/New-Government-Schemes/GovSchemes'
import StartUp from '../components/StartUp-Insights/StartUp'
import DailyNews from '../components/Daily-NewsLetter/DailyNews'
import Footer from '../components/Footer/Footer'
import Auth from '../components/Auth/Auth.jsx'
function Home() {
  return (
    <>
        <Header />
        <Herosection />
        <Auth></Auth>
        <Finiance />
        <GovSchemes/>
        <StartUp />
        <DailyNews/>
        <Footer />
    </>
  )
}

export default Home