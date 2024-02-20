import './App.css'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

function App() {


  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default App
