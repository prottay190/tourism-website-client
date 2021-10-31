import React from 'react';
import useAuth from '../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';

const SingIn = () => {
    const  { setUser, user, singInUsingGoogle,} = useAuth();

    
    return (
        <div className="p-5 mt-4">
            <button 
            onClick={singInUsingGoogle} 
            className="btn btn-warning"><FaGoogle />  Google SignIn</button>
        </div>
    );
};

export default SingIn;