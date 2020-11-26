import React  from 'react';
import NavBar from './Components/NavBar';
import logo from './logo2.svg';

import { Link } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
          <Link to={'/'}>
            <div className="columns is-centered">
              <img src={logo} className="column is-2"></img>
            </div>
          </Link>
          <NavBar />
      </BrowserRouter>
    </div>
  );
}

export default App;

