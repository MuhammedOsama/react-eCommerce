import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import firebase from "../firebase/Config";

/**
 * Function to handleUserLogin.
 * @params { email, password } - Take email and password from user and check if correct leads him to Home Page.
 * @param props received from Parent Function(Page) to handle routes.
 * @return true if data received from user are correct & false if opposite.
 **/

export default (props) => {

    const [form, setForm] = useState({email: "", password: ""});
    const [error, setError] = useState("");

    const onLogIn = (e) => {
        const errs = {
            "The email address is badly formatted.": "Please enter valid email.",
            "The password is invalid or the user does not have a password.": "Invalid Password.",
            "Too many unsuccessful login attempts. Please try again later.": "Please try again.",
            "There is no user record corresponding to this identifier. The user may have been deleted.": "There is no account registered with this data."
        };
        e.preventDefault();
        firebase
            .auth()
            .signInWithEmailAndPassword(form.email, form.password)
            .then(() => {
                props.history.push("/");
                setTimeout(() => {
                    document.location.reload();
                }, 500)
            })
            .catch((err) => setError(errs[err.message]))
    };

    useEffect(() => {
        if(props.location.pathname === "/login") {
            props.handleUserFunction(false);
        }
    })

    return (
        <div id="login">
            <div className="container">
                <div className="login-form">
                    <h1>Log In</h1>
                    {error ? <div className="alert-danger" style={{borderRadius: '15px', padding: "5px 0"}}>
                        <span>{error}</span>
                    </div> : null}
                    <form>
                        <input type="email" placeholder="Enter E-mail" onChange={(e) => setForm({...form, email: e.target.value})} />
                        <input type="password" placeholder="Enter Password" onChange={(e) => setForm({...form, password: e.target.value})} />
                        <input type="submit" value="Login" onClick={(e) => onLogIn(e)} />
                    </form>
                    <Link to="/reset">Forgotten Password?</Link>
                    <span className="create-email">Don't Have E-mail! <Link className="link" to="/register">Create One.</Link></span>
                </div>
            </div>
        </div>
    );
}