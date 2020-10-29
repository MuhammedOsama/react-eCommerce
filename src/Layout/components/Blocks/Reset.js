import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import firebase from '../firebase/Config';

export default (props) => {

    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

    const reset = (e) => {
        const errs = {
            "The email address is badly formatted.": "Please enter valid email.",
            "There is no user record corresponding to this identifier. The user may have been deleted.": "There is no account registered with this data."
        };

        e.preventDefault();
        firebase
            .auth()
            .sendPasswordResetEmail(email)
            .then(() => props.history.push("/"))
            .catch((err) => {
                console.log(err);
                setError(errs[err.message])
            });
    };

    useEffect(() => {
        if (props.location.pathname === "/reset") {
            props.handleUserFunction(false);
        }
    })

    return (
        <div id="reset">
            <div className="container">
                <div className="login-form">
                    <h1>Reset</h1>
                    {error ? <div className="alert-danger" style={{borderRadius: '15px', padding: "5px 0"}}>
                        <span>{error}</span>
                    </div> : null}
                    <form action="/">
                        <input type="email" placeholder="Enter E-mail" onChange={(e) =>
                            setEmail(e.target.value)}/>
                        <input type="submit" value="Reset" onClick={(e) => reset(e)}/>
                    </form>
                    <span className="create-email">Remember Password ! <Link className="link" to="/login">Log In.</Link></span>
                    <span className="create-email">Don't Have E-mail ! <Link className="link"
                                                                             to="/register">Create One.</Link></span>
                </div>
            </div>
        </div>
    );
}