import React from 'react';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import logo from './logo2.svg';

import { Link } from 'react-router-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import ItemListContainer from './Containers/ItemListContainer';


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
        <Switch>
          <Route exact path='/'>        
            <main className="columns">
              <div className="column is-centered">
                <Home name={'Welcome to Bambole'}/>
                <ItemListContainer/>
              </div>
            </main>
          </Route>
          <Route path='/patterns'></Route>
          <Route path='/gallery'></Route>
          <Route path='/about-me'></Route>
          <Route path='/contact'></Route>
          <Route path='/shop'></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

