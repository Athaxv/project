import { useState } from 'react'
import Footer from './components/Footer'
import Home from './components/Home'
import './App.css'
import Navbar from './components/Navbar'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navbar/>} />
      <Route path='/' element={<Home/>} />
      <Route path='/' element={<Footer/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
