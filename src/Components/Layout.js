import React,{useState} from 'react'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
//DATA
import { ABOUTCOUNTENT } from '../Shared/aboutContent'
import { FAQ } from '../Shared/faq'
import { HIGHLIGHTS } from '../Shared/highLights'

export default function Layout() {
    const[aboutContent, setAboutContent] =useState(ABOUTCOUNTENT)
    const[faq, setFaq] =useState(FAQ)
    const[highLights, setHighLights] =useState(HIGHLIGHTS)
    
    return (
        <>
        <Home faq={faq} highLights={highLights}/>
        {/* <About aboutContent={aboutContent}  */}
        {/* <Contact/> */}
        </>
    )
}
