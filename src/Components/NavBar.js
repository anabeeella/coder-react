import React from 'react';
import CartIcon from './CartIcon';
import './NavBar.css';
import { Link } from 'react-router-dom';
import {Switch, Route} from 'react-router-dom';


import Home from '../Components/Home';
import ItemListContainer from '../Containers/ItemListContainer';
import ItemDetailContainer from '../Containers/ItemDetailContainer'
import CartContainer from '../Containers/CartContainer';
//Es un componente FUNCIONAL que retorna JSX
//En HOME.JS para retornar JSX hay que usar un render()


const NavBar = () => {
    return (
    <div>
        <nav className="navbar is-flex" role="navigation" aria-label="main navigation">
                <a className="navbar-item"><Link to={'/patterns'}>Patterns</Link></a>
                <a className="navbar-item"><Link to={'/gallery'}>Gallery</Link></a>
                <a className="navbar-item"><Link to={'/about-me'}>About me</Link></a>
                <a className="navbar-item"><Link to={'/contact'}>Contact</Link></a>
                <a className="navbar-item"><Link to={'/shop'}>Shop</Link></a>
                <a className="navbar-item"><Link to={'/cart'}><CartIcon/></Link></a>
        </nav>
        <Switch>
          <Route exact path='/'>        
            <main className="columns">
              <div className="column is-centered">
                <Home name={'Welcome to Bambole'}/>
              </div>
            </main>
          </Route>
          <Route path='/patterns'></Route>
          <Route path='/gallery'></Route>
          <Route path='/about-me'></Route>
          <Route path='/contact'></Route>
          <Route path='/shop'><ItemListContainer/></Route>
          <Route path='/cart'><CartContainer/></Route>
          <Route exact path="/:id" component={ItemDetailContainer}/>
        </Switch>
    </div>  
    );
}

export default NavBar;


/*        <Switch>
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
    */