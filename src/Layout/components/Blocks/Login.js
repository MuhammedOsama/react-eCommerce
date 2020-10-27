import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import firebase from "../firebase/Config";

export default (props) => {

    const [form, setForm] = useState({});
    const [error, setError] = useState("");

    // console.log(error)

    function onLogIn () {
        firebase.auth().signInWithEmailAndPassword(form.email, form.password).then(() =>
            props.history.push("/")).catch(() => {
            // Handle Errors here.
            setError(error.message);
        });
    }

    if(props.location.pathname === "/login") {
        props.handleUserFunction(true);
    }

    return (
        <div id="login">
            <div className="container">
                <div className="login-form">
                    <h1>Log In</h1>
                    <form action="/">
                        <input type="email" placeholder="Enter E-mail" onChange={(e) => setForm({...form, email: e.target.value})} />
                        <input type="password" placeholder="Enter Password" onChange={(e) => setForm({...form, password: e.target.value})} />
                        <input type="submit" value="Log In" onClick={() => onLogIn()} />
                    </form>
                    <Link to="/reset">Forgotten Password?</Link>
                    <span className="create-email">Don't Have E-mail ! <Link className="link" to="/register">Create One.</Link></span>
                </div>
            </div>
        </div>
    );
}