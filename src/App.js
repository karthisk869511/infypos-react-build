
import './App.css';
import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import Home from './page/home/Home';
import ForgotPassword from './components/auth/ForgotPassword';

const App = () => {
  return (
    <div id="whole-app">
      <Router>
        <Routes>
          <Route path="/" element={<SignIn></SignIn>}/>
          <Route path="/home" element={<Home></Home>}/>
          <Route path="/signin" element={<SignIn></SignIn>}/>
          <Route path="/forgot-password" element={<ForgotPassword></ForgotPassword>}/>
        </Routes>
      </Router>
    
    </div>
  )
}

export default App
