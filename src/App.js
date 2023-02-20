import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import About from './About';
import Query from './Query';


function App() {
  return (
    <div className='body'>

    
    <Router>
    <Navbar/>
   
      <Routes>
        
      <Route path='/Home' element={<Home/>} />

      <Route path='/Login' element={<Login/>}/>
      <Route path= '/About' element={<About/>}/>
      <Route path='/Query' element={<Query/>}/>
      </Routes>
    </Router>
     
    </div>
  );
}

export default App;
