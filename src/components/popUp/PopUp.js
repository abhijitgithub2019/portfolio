import React from 'react'
import './PopUp.css';
const PopUp = (props) => {
  return (
    <div>
        <div className='main'>
            
            <div className="child">
            <a className='close' href='#' onClick={()=>props.close()}>&times;</a>
            <h2> Welcome to Abhijit's portfolio</h2>
            <div className="content">
                Thanks, Your Mail has sent successfully. 
            </div>
            </div>
        </div>
    </div>
  )
}

export default PopUp;