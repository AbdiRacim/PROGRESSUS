import React from 'react'
import NavBar from '../Components/NavBar'
import Header from '../Components/home/Header'
import Intro from '../Components/home/Intro'
import HighLights from '../Components/home/HighLights'
import Faq from '../Components/home/Faq'
import Footer from '../Components/Footer'
export default function Home(props) {
  return (
    <>
    <NavBar/>
    <Header/>
    <Intro/>
    <HighLights highLights={props.highLights}/>
    <Faq faq={props.faq}  />
    <Footer/>
    </>
  )
}
