import * as React from 'react';
// import { Link, useStaticQuery, graphql} from 'gatsby';

import Header from '../components/Header'

const Layout = ({ PageTitle, children })=>{
    return(
        <div>
            <Header></Header>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout