import * as React from 'react';
import '../styles/homecard.css'

const HomeCard = (props)=>{
    return(
        <div className="HomeCard">
            <p>{props.name}</p>
        </div>
    )
}

export default HomeCard