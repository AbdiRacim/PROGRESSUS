import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import Content from '../Components/about/Content'
import SideBar from '../Components/about/SideBar'

export default function About(props) {
  return (
    <>
    <NavBar/>
    <header id="head" className="secondary"></header>
    <div className="container">
        <ol className='breadcrumb'>
            <li><a href="#">Home</a></li>
            <li>About</li>
        </ol>
        <div className='row'>
    <Content aboutContent={props.aboutContent}/>
    <SideBar/>
    </div>
    </div>
    <Footer/>
    </>
  )
}
