import React from 'react';

export default function login(props) {
    return (
        <div style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <div style={{ backgroundColor: 'red', padding: 10, borderRadius: 15 }}>
                <a href={"http://localhost:5000/api/google"}
                style={{
                textDecoration: 'none',
                padding: 10,
                color: 'white',
                border: 'none',
                borderRadius: 4,
                display: 'inline-block',
                }}>
                    <i class="fa fa-google" style={{marginRight: 10}}></i> Login with Google 
                </a>
            </div>
        </div>
    );
};