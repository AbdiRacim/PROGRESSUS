import React from 'react'
import logo from '../assets/logo.png'

export default function NavBar() {
    return (
    <div className="navbar navbar-inverse navbar-fixed-top headroom">
        <div className='container'>
            <div className='navnbar-header'>
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="icon-bar"></span> 
                    <span className="icon-bar"></span> 
                    <span className="icon-bar"></span> 
                </button>
                    <a href="#" className='navbar-brand'>
                        <img src={logo} alt="progressus" />
                    </a>
            </div>
            <div className='navbar-collapse collapse'>
                <ul className='nav navbar-nav pull-right'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Contact</a></li>
                    <li><a href='#' className="btn">sign In / sign Up</a></li>
                </ul>
            </div>            
        </div>
    </div>
    )
}
