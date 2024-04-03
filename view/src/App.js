import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';



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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {data.name}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
