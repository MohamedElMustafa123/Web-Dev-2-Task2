//import libraries and hooks
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login(){
    //state variables to store the user input
    const [email, setEmail] = useState("");//stores the email
    const [password, setPassword] = useState("");//stores the password
    //used to naviage to a different page
    const navigate = useNavigate();

    //function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/login', {email, password })//sends a post request to the server with the email and password
            .then(result => {
                console.log(result)

                // if the data returned is success it navigates to the home page
                if (result.data === "Success") {
                    navigate('/home');
                }

            })
            .catch(err => console.log(err)); //logs errors if any
    };

    return (

        //container for login page
        <div className="signup_in_page">
            <div className="signup_in_container">
                <h2>Log in</h2>
                {/*form element that handles the submission of the login form */}
                <form onSubmit={handleSubmit}>
                    {/*email input field */}
                    <div className="email_box">
                        <label htmlFor="email">Email</label>
                        <input
                            className="signup_in_email_input"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    {/*password input field */}
                    <div className="login_password_box">
                        <label htmlFor="password">Password</label>
                        <input
                            className="signup_in_password_input"
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {/*login button */}
                    <button type="submit" className="signup_in_button">Log in</button>
                </form>
                {/*link to the signup page if the user doesnt have an account*/}
                <Link to="/register">Don't have an account? Sign up</Link>
            </div>
        </div>
    );

}

export default Login;