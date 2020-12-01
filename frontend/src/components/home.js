import React from 'react';
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home(props) {

    const [user, setUser] = useState({});

    useEffect(() => {
        axios.get('/api/user')
        .then(res => {
            setUser(res.data);
        })
        .catch(err => {
            console.log(err);
        });
    });

    return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ backgroundColor: '#ddddff', padding: 60, borderRadius: 25 }}>
                <div style={{fontSize: 60}}> Welcome, {user.name} </div>
                <h3 style={{color: '#333333'}}> Email: {user.email} </h3>
                <h3 style={{color: '#333333'}}> Picture URL: <a href={user.pic}>{user.pic}</a> </h3>
            </div>
        </div>
    );
};