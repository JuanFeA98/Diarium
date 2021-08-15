import * as React from 'react'
import '../styles/listcard.css'

const ListCard = (props)=>{
    const [show, setShow] = React.useState(false)
    
    return(
        <div className="ListCard">
            <p onClick={()=>setShow(!show)}>{props.name}</p>
            {
                show?
                <div className='works'>
                    <input type="text" placeholder="New List"/>
                    <button>Create</button>
                </div>
                :null
            }
            {/* <button onClick={()=>setShow(true)}>Show</button> */}
            {/* <button onClick={()=>setShow(false)}>Hide</button> */}
            {/* <button onClick={()=>setShow(!show)}>Toogle</button> */}
        </div>
    )
}

export default ListCard