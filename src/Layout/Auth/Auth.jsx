import React from 'react';
import { Outlet } from 'react-router-dom';
import backgroundImage from '../../assets/backgroundImage.png';

const Auth = () => {
    return (
        <div
        className="w-full flex items-center justify-center relative bg-[#f9e5ac]"
        style={{
            height: "100vh",
        }}
    >
        
        <div    ></div>
    
     
        <div
            style={{
                background: '#ffffff',
                padding: 30,
                borderRadius: 10,
                width: 510,
                position: 'relative',
                zIndex: 2,
            }} 
            className='shadow-xl'
        >
            <Outlet />
        </div>
    </div>
    
    );
};

export default Auth;
