import React from 'react';
import auth from './auth';

const LandingPage = props => {
    return (
        <div>
            Landing Page
            <button onClick={ () => {
                auth.login(() => {
                    props.history.push('/protected')
                });
            }}>Login</button>
        </div>
    )
}

export default LandingPage;