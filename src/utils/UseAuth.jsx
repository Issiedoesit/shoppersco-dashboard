import React, { useState } from 'react'


const UseAuth = () => {

    const [token, setToken] = useState(() => {
        const storedToken = localStorage.getItem('token');
        return storedToken !== null ? JSON.parse(storedToken) : null;
    });

    // console.log('I am token: ', token);

    return {token, setToken}
}

export default UseAuth