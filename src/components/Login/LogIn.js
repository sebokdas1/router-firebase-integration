import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const LogIn = () => {
    const { signInGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: '20px' }}>
                <button onClick={signInGoogle}>google sign In</button>
            </div>
            <form>
                <input type="email" placeholder='enter your email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="login" />
            </form>
        </div>
    );
};

export default LogIn;