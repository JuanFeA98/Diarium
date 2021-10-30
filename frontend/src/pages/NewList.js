import * as React from 'react';

import Layout from '../components/Layout';
import ListCard from '../components/ListCard';
import '../styles/newlist.css'

const NewList = ()=>{
    return(
        <Layout>
            <div className="NewList">
                <h2>New List</h2>
                <ListCard name='+ Create List'></ListCard>
            </div>
        </Layout>
    )
}

export default NewList