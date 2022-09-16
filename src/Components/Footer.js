import React from 'react'

// Assets
import { AiFillFacebook, AiFillTwitterCircle, AiFillInstagram} from 'react-icons/ai';
export default function Footer() {
  return (
    <footer className='top-space'>

        <div className="footer1">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 widget">
                        <h3 className='widget-title'>Contact</h3>
                        <p className="widget-body">
                            <a href="tel:+234 23 9087457">+234 23 9087457</a>
                            
                            <br />
                            <a href="mailto:some.email@somewhere.com">Some.email@somewhere.com</a>
                            <br />
                            <br />
                            234 Hidden Pnd Road, Ashland City, TN 37015
                        </p>
                    </div>
                    <div className="col-md-3 widget">
                    <h3 className='widget-title'>Follow me</h3>
                    <p className="widget-body follow-me-icons">
                        <a href="#"><AiFillFacebook size={"4rem"}/></a>
                        <a href="#"><AiFillTwitterCircle size={"4rem"}/></a>
                        <a href="#"><AiFillInstagram size={"4rem"}/></a>
                    </p>
                    </div>
                    <div className="col-md-6 widget">
                    <h3 className='widget-title'>Text Widget</h3>
                    <div className="widjet-body">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero illo, neque repellat vero harum odio aspernatur quas. Voluptatibus excepturi dolore officia, cumque reiciendis quasi quas nemo praesentium nulla amet ipsum. Ex pariatur molestiae commodi? Ducimus quis distinctio voluptatem, cum maiores quasi soluta consequuntur molestiae? Quas consequatur sequi adipisci sed nemo.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, esse tenetur itaque et reiciendis unde ipsum sequi, laborum totam non numquam laboriosam modi. Sint ratione eveniet eum reprehenderit animi, possimus iure quisquam vitae modi, nemo quia distinctio, numquam quibusdam est!</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="footer2">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 widget">
                        <p className="widget-body simplenav">
                            <a href="#">Home</a>|
                            <a href="#">About</a>|
                            <a href="#">Contact</a>|
                            <a href="#">Sign in /sign up</a>
                        </p>
                    </div>
                    <div className="col-md-6 widget">
                        <div className="widget-body text-right">
                        Copyright &copy; 2014, Abdi Racim. Designed by <a href="http://gettemplate.com/" rel="designer">gettemplate</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </footer>
  )
}
