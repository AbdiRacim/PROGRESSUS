import React from 'react'



export default function HighLights(props) {
    const highLightsList = props.highLights.map(highLight =>(
        <div key={highLight.id} className='col-md-3 col-sm-6 highlight '>
            <div className='h-caption'>
                <h4>{highLight.image} <br/> {highLight.title}</h4>
            </div>
            <div className='h-body text-center'>
                <p>{highLight.description}</p>
            </div>
            
        </div>
    ))
  return (
    <div className='container top-space'>
        <h3 className='text-center thin'>Reasons to use this template</h3>
            <div className='row'>
                {highLightsList}
            </div>
    </div>
  )
}
