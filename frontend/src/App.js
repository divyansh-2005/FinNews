import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MyFeed from './components/MyFeedSecion/MyFeed';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Signin from './components/signin/Signin';
import Register from './components/signin/Regiseter';

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myfeed" element={<MyFeed />} />
        <Route path='/auth/login' element={<Signin/>} />
        <Route path='/auth/register' element={<Register/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
