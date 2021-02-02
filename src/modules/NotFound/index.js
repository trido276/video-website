import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
    return (
        <div className="text-center" style={{marginTop:"5%"}}>
            <h1 className="text-white">404 - Not Found!</h1>
            <Link to="/">
                Go Home
            </Link>
        </div>
    );
}
export default NotFound;