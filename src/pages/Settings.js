import React, { useState, useContext } from 'react';
import firebase from 'gatsby-plugin-firebase';
import { navigate } from 'gatsby';

import { AuthContext } from '../context/auth';

import Layout from '../components/Layout';

const Settings = ()=>{
    const [data, setData] = useState({
        email: '',
        password: '',
        error: null,
    })
    
    const {setUser} = useContext(AuthContext)

    const handleChange = e =>{
        setData({...data, [e.target.name]: e.target.value})
    }

    const handleSubmit = async e =>{
        e.eventDefault()
        setData({ ...data, error:null})
        try {
            const result = await firebase
                .auth()
                .createUserWithEmailAndPassword(data.email, data.password)
            setUser(result)
            navigate("/")
        } catch (error) {
            setData({ ...data, error:error.message })
        }
    }

    return(
        <Layout>
            <div className="Settings">
                <p>Hello</p>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email">Email</label>
                        <br/>
                        <input 
                            type="email" 
                            name="email" 
                            value={data.email}
                            onChange={handleChange}
                            />
                        <br/>
                        <br/>
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <br/>
                        <input 
                            type="password" 
                            name="password"
                            value = {data.password}
                            onChange={handleChange}
                            />
                        <br/>
                        <br/>
                    </div>
                    {data.error ? <p style={{color:"red"}}>{data.error}</p>:<p>Hello</p>}
                    <input type="submit" value='Register' />
                </form>
            </div>
        </Layout>
    )
}

export default Settings