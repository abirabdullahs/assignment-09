import React, { useState } from 'react';
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import { Outlet } from 'react-router';
import { useAuth } from '../hooks/useAuth';

const Root = () => {

    const {user} = useAuth();
    const [editUser, setEditUser] = useState(user);
    
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet
            context={{editUser, setEditUser}}
            />
            <Footer />
        
        </div>
    );
};

export default Root;