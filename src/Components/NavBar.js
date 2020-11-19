import React from 'react';
import CartIcon from './CartIcon';
import './NavBar.css';
import { Link } from 'react-router-dom';

//Es un componente FUNCIONAL que retorna JSX
//En HOME.JS para retornar JSX hay que usar un render()
const NavBar = () => {
    return (
        <nav className="navbar is-flex" role="navigation" aria-label="main navigation">
                <a className="navbar-item"><Link to={'/patterns'}>Patterns</Link></a>
                <a className="navbar-item"><Link to={'/gallery'}>Gallery</Link></a>
                <a className="navbar-item"><Link to={'/about-me'}>About me</Link></a>
                <a className="navbar-item"><Link to={'/contact'}>Contact</Link></a>
                <a className="navbar-item"><Link to={'/shop'}><CartIcon/>Shop</Link></a>
        </nav>
    );
}

export default NavBar;