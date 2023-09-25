import React, {useState, useEffect} from "react";
import {auth, provider} from "../firebase.jsx";
import {signInWithPopup} from "firebase/auth";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


export default function Main() {
    const [value, setValue] = useState('');
    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            setValue(data.user.email)
            localStorage.setItem("Email", data.user.email);
        })
    };
    useEffect(() => {
        setValue(localStorage.getItem('Email'))
    }, []);

    const clearLocal = () => {
        localStorage.clear();
        window.location.reload();
    }

    const alertFunction = () => {
        alert(`Registered ${localStorage.getItem('Email')}`)
    }
    return (
        <div className="homepage">
            <div className="logo"></div>
            <div className="hero"></div>
            <div className="main">
                <h1>
                    A Unique Learning Camp crafted for techies in
                    <span className="txt"> Hyderabad</span>
                </h1>
                <p className="about">
                    In the span of 22 hours over a weekend, one will get to learn, engage, and network with some of the
                    best
                    mentors in the edu-tech industry!
                </p>
                {value ? <>
                        <button className="btn" onClick={alertFunction}>Continue</button>
                        <button className="btn" onClick={clearLocal}>Logout</button>
                    </> :
                    <button className="btn" onClick={handleClick}>Continue with google</button>}
            </div>
        </div>
    );
}