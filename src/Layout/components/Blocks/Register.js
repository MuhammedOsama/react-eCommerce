import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div id="register">
            <div className="container">
                <div className="login-form">
                    <h1>Sign Up</h1>
                    <form action="/">
                        <input type="text" placeholder="Full Name" />
                        <input type="text" placeholder="Enter E-mail" />
                        <input type="password" placeholder="Enter Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <input type="submit" value="Sign Up" />
                    </form>
                    <span className="create-email">Have An Existing Account ! <Link className="link" to="/login">Log In.</Link></span>
                </div>
            </div>
        </div>
    );
}