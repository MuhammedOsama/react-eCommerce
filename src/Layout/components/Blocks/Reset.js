import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {

    if(props.location.pathname === "/reset") {
        props.handleUserFunction(false);
    }

    return (
        <div id="reset">
            <div className="container">
                <div className="login-form">
                    <h1>Reset</h1>
                    <form action="/">
                        <input type="text" placeholder="Enter E-mail" />
                        <input type="submit" value="Reset" />
                    </form>
                    <span className="create-email">Remember Password ! <Link className="link" to="/login">Log In.</Link></span>
                    <span className="create-email">Don't Have E-mail ! <Link className="link" to="/register">Create One.</Link></span>
                </div>
            </div>
        </div>
    );
}