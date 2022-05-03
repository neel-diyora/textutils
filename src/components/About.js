import React, {useState} from 'react'

export default function About(props) {

    // const [myStyle, setmyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'dark'?'white':'#444482',
        backgroundColor: props.mode === 'dark'?'#444482':'white',
        border: '0.8px solid',
        borderColor: props.mode ==='dark'?'white':'#444482'
    }

    // const [btntext, setBtntext] = useState("Enable dark mode")

    // const toggleStyle = () => {
    //     if(myStyle.color === 'black'){
    //         setmyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '2px solid white'
    //         })
    //         setBtntext("Enable light mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtntext("Enable dark mode")
    //     }
    // }

  return (
    <div className='container'>
        <h2 className='my-3' style={{color: props.mode ==='dark'?'red':'black'}}>About Us</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
               <strong> first item</strong>
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
            <strong> second item</strong>
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
            <strong> third item</strong>
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={myStyle}>Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
            </div>
        </div>
        </div>
        {/* <div className="contaier">
            <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">
                {btntext}
            </button>     
        </div> */}
    </div>
  )
}
