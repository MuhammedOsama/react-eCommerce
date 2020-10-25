import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return(
        <div id="login">
            <div className="container">
                <div className="login-form">
                    <h1>Log In</h1>
                    <form action="/">
                        <input type="text" placeholder="Enter E-mail" />
                        <input type="password" placeholder="Enter Password" />
                        <input type="submit" value="Log In" />
                    </form>
                    <a href="/"><Link to="/reset">Forgotten Password?</Link></a>
                    <span className="create-email">Don't Have E-mail ! <Link className="link" to="/register">Create One.</Link></span>
                </div>
            </div>
        </div>
    );
}