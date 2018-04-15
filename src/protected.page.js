import React from 'react';
import auth from './auth';

const ProtectedPage = props => {
    return (
        <div>
            <p>Protected  Page</p>
            <button onClick={ () => {
                auth.login(() => {
                    props.history.push('/')
                });
            }}>Logout</button>
        </div>
    )
}

export default ProtectedPage;