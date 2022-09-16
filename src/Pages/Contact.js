import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

export default function Contact() {
  return (
    <>
        <NavBar/>
        
        <header id="head" className="secondary"></header>

        <div className="container">
                <ol className='breadcrumb'>
                    <li><a href="#">Home</a></li>
                    <li>Contact</li>
                </ol>  
            <div className="row">
                <div className="col-sm-9">
                    <header className='page-header'>
                        <h1 className="page-title">Contact Us</h1>
                    </header>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi nesciunt dolores dignissimos. Sunt, cupiditate soluta, iusto alias ipsam saepe accusantium explicabo ad necessitatibus aspernatur doloremque dignissimos itaque repellat, sequi temporibus voluptates sed qui dolorum eius laudantium. Quam aut dolore obcaecati.</p>

                    <br />

                    <form action="">
                        <div className="row">
                            <dvi className="col-sm-4">
                                <input type="text" placeholder='Name' className='form-control'/>
                            </dvi>
                            <dvi className="col-sm-4">
                            <input type="email" placeholder='E-mail' className='form-control'/>
                            </dvi>
                            <dvi className="col-sm-4">
                            <input type="text" placeholder='Text' className='form-control'/>
                            </dvi>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-12">
                                <textarea rows="9" className='form-control' placeholder='type your message her'></textarea>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-sm-6">
                                <label className="checkbox">
                                    <input type="checkbox" />
                                    Sign Up for newsletter</label>
                            </div>
                            <div className="col-sm-6 text-right">
                                <input type="submit" className='btn btn-action' value='Send message' />
                            </div>
                        </div>
                    </form>
                </div>

                <aside className="col-sm-3 sidebar sidebar-right">
                    <div className="widget">
                        <h4>Address</h4>
                        <address>
                            2002 Holcombe Boulevard, Houston, TX 77030, USA
                        </address>
                        <h4>Phone:</h4>
                        <address>
                            (713) 791-1414
                        </address>
                    </div>
                </aside>

            </div>
        </div>


        <Footer/>
    </>
  )
}
