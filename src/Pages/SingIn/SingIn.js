import React from 'react';
import useAuth from '../../hooks/useAuth';
import { FaGoogle } from 'react-icons/fa';

const SingIn = () => {
    const  { setUser, user, singInUsingGoogle,} = useAuth();

    
    return (
        <div>
            <button 
            onClick={singInUsingGoogle} 
            
            className="btn btn-warning"><FaGoogle />  Google SingIn</button>
        </div>
    );
};

export default SingIn;