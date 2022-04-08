import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <form>
                <input type="text" placeholder='your name' />
                <br />
                <input type="email" name="" id="" placeholder='enter your email' />
                <br />
                <input type="password" name="" id="" placeholder='password' />
                <br />
                <input type="submit" value="register" />
            </form>
        </div>
    );
};

export default Register;