import React from 'react'

const NextButton = (props) => {
    return (
        <div className='nextButton' onClick={()=>{props.nextCategory()}}>Next</div>
    )
}

export default NextButton;