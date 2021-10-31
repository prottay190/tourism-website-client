import React, { useContext } from 'react';
import { AuthContext } from '../contaxt/AuthProvider';

const useAuth = () => {
    return useContext(AuthContext);
};

export default useAuth;