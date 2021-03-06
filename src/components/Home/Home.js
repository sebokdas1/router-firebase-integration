import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h3>This is home</h3>
            <p>Current User is: {user ? user.displayName : 'no body'}</p>
        </div>
    );
};

export default Home;