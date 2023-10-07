import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import About from './pages/About'


export default function App() {
  return( 
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sign-in" element={<SignIn />}/>
      <Route path="/Sign-out" element={<SignOut/>}/>
      <Route path="/profile" element={<Profile/>}/>
      <Route path="/sign-up" element={<SignUp/>}/>
      <Route path="/about" element={<About/>}/>
    </Routes>
    
  </BrowserRouter>
  )
}
