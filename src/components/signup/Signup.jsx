import React from 'react';
import './signup.css';
import { Link } from 'react-router-dom';
import axios from "axios";

const Signup = () => {
    const handleSubmit = (event) => {
        const nameRegex = /^[A-Za-z\s]{3,}$/;
        const passwordRegex = /^[A-Za-z0-9!@#$%^&*()_+{}\[\]:;<>,.?~=-]{8,}$/;
        event.preventDefault();
        const name = event.target[0].value;
        const email = event.target[1].value;
        const password = event.target[2].value;
        if (!nameRegex.test(name)) {
            alert("Please Enter Valid Name");
            return;
        } else if (!passwordRegex.test(password)) {
            alert("Password should be 8 letter or more");
            return
        } else {
            axios.post("https://padmini-qurinom-backend.vercel.app/signup", { name, email, password })
                .then(res => {
                    console.log(res)
                    document.cookie = "token=" + res.data.token + "; expires=" + Date.now() + 1 * 24 * 60 * 60 * 1000;
                    window.location.href = 'https://padmini-qurinom-frontend.vercel.app/'
                }).catch(e => {
                    console.log(e);
                })
        }
    }
    return (
        <div className='signup'>
            <div className="signupleft"></div>
            <div className="signupRight">
                <form onSubmit={handleSubmit} className='signupbox'>
                    <input placeholder='Enter Name' type="text" required />
                    <input placeholder='Email' type="email" required />
                    <input placeholder='Password' type="password" required />
                    <button type="submit" >Agree & Sign-up</button>
                    <Link to="/login" className='gotosignup'>
                        <div className='signupwith'>
                            <hr className='leftline' /><span>Alredy Have Account</span><hr className='rightline' />
                        </div>
                    </Link>
                </form>
            </div>
        </div>
    )
}

export default Signup;
