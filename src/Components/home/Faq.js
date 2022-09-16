import React from 'react'

export default function Faq(props) {

    const faqlist = props.faq.map((faqPair, index )=> (
        <div key={index} className='row'>
            {
                faqPair.map(singLeFaq =>(
                    <div key={singLeFaq.id} className='col-sm-6'>
                        <h3>{singLeFaq.question}</h3>
                        {singLeFaq.answer}
                    </div>
                ))
            }
        </div>
    ))

  return (
    <div className='container'>
        <h2 className='text-center top-space'>Frequently Asked Questions</h2>
        <br />
        {faqlist}
        <div className='top-space'/*jumbtron*/ >
            <h4>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis voluptatum nemo laboriosam beatae incidunt ducimus excepturi vitae quaerat expedita alias corporis atque maiores odio minus perferendis, eaque debitis illum iusto tempore a quas quo amet nihil. Architecto nobis sunt minus?
            </h4>
            <p className='text-right'>
                <a className='btn btn-action btn-large'>Learn More {">>"}</a>
            </p>
        </div>
    </div>
  )
}
