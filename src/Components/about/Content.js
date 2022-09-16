import React from 'react'

export default function Content(props) {

    const contentList = props.aboutContent.map((singlecontent, index )=> (
        <div key={singlecontent.id} >
            <h3 >{singlecontent.title}</h3>
            {singlecontent.image == undefined ?
            <></>
        :
        singlecontent.image
        }{
            singlecontent.content.map(singlepara => (
                <p>{singlepara}</p>
            ))
        }

        </div>
    ))
  return (
    
    <div className="col-md-8 maincontent">
        <header className='page-header'>
            <h1 className='page-title'>About Us</h1>
            </header>
        {contentList}
        
        </div>
  )
}
