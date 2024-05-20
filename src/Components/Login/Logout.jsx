import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Logout = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <Button variant="dark" className='logout-btn' onClick={() => logout()}>
                Sign Out
            </Button>
        )
    );
};

export default Logout;
