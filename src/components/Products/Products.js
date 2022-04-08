import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const { user } = useFirebase();
    return (
        <div>
            <h3>Who is there?</h3>
            <h6>{user ? user.displayName : 'booooooot'}</h6>
        </div>
    );
};

export default Products;