import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import firebase from "../firebase/Config";

export default (props) => {
    const [form, setForm] = useState({email: "", full_name: "", password: ""});
    const [error, setError] = useState("");

    useEffect(() => {
        if(props.location.pathname === "/register") {
            props.handleUserFunction(false);
        }
    });

    const handleSendVerificationEmail = () => {
        let user = firebase.auth().currentUser;

        user.sendEmailVerification().then(() => {
            setError("Success! Check your inbox to verify your email.")
        }).catch((error) => {
            setError(error.message)
        });
    }

    const handleUserRegister = (e) => {
        e.preventDefault();
        const errs = {
            "The email address is badly formatted.": "Please enter valid email.",
            "The password is invalid or the user does not have a password.": "Invalid Password.",
            "Too many unsuccessful login attempts. Please try again later.": "Please try again.",
            "There is no user record corresponding to this identifier. The user may have been deleted.": "There is no account registered with this data."
        };

        firebase.auth().createUserWithEmailAndPassword(form.email, form.password)
            .then(() => handleSendVerificationEmail())
            .catch((err) => {
                console.log(err);
                setError(errs[err.message])
            });
    }

    return (
        <div id="register">
            <div className="container">
                <div className="login-form">
                    <h1>Sign Up</h1>
                    {error ? <div className={error === "Success! Check your inbox to verify your email." ? "alert-success" : "alert-danger"} style={{borderRadius: '15px', padding: "5px 0"}}>
                        <span>{error}</span>
                    </div> : null}
                    <form action="/">
                        <input value={form.full_name} onChange={(e) => setForm({...form, full_name: e.target.value})} type="text" placeholder="Full Name" />
                        <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} type="text" placeholder="Enter E-mail" />
                        <input value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} type="password" placeholder="Enter Password" />
                        <input type="submit" value="Sign Up" onClick={(e) => handleUserRegister(e)} />
                    </form>
                    <span className="create-email">Have An Existing Account ! <Link className="link" to="/login">Log In.</Link></span>
                </div>
            </div>
        </div>
    );
}