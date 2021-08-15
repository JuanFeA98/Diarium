import * as React from 'react';
import { Link } from 'gatsby'
import Logo from '../images/book.png'

import '../styles/header.css'

const Header = ()=>{
    return(
        <div className="Header">
            <Link to="/">
                <div className='dummie'></div>
                {/* <img src={Logo} alt="" /> */}
                <h1>Diarium</h1>
            </Link>
        </div>
    )
}

export default Header