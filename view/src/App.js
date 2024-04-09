
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Home from './Home';


function App() {
  //TEMPORARY FETCHING AND HOOKS
  const url = "/ingredient/2";
  const [data, setData] = useState([]);

  async function fetchData(){
    return fetch(url)
      .then( async (response) => {return await response.json()})
      .then((d) => {setData(d)});
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} /> 
      </Routes>
    </div>
  </Router>
  );
}

export default App;
