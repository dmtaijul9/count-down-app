
import React from 'react'
import Digit from './digit/digit'



const Countdown = (props) => {
    return (
        <div className = "d-flex text-center">
            <Digit color = "palegreen" value = { props.time.min }/>
            <Digit color = "skyblue" value = { props.time.sec } />
            <Digit color = 'salmon' value = {props.time.mili} />
        </div>
    )
}

export default Countdown