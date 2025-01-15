//import libraries and hooks
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Signup() {

    //state variables to store the user input
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    //used to naviage to a different page
    const navigate = useNavigate();


//function to handle the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        //send a post request to the server
        axios.post('https://web-dev-2-task2-api.vercel.app/register', { name, email, password })
            .then(result => {console.log(result) //logs the result
                navigate('/login');//redirects to the login page


            })
            .catch(err => console.log(err)); //logs errors if any
    };

    return (
        //signup page 
        <div className="signup_in_page">
            <div className="signup_in_container">
                <h2>Sign up</h2>
                {/*form element that handles the submission of the signup form */}
                <form onSubmit={handleSubmit}>
                    {/*name input field */}
                    <div className="name_box">
                        <label htmlFor="name">Name</label>
                        <input
                        className="name_input"
                            type="text"
                            placeholder="Enter your name"
                            name="signup_name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}//updates the name state variable
                        />
                    </div>
                    {/*email input field */}
                    <div className="email_box">
                        <label htmlFor="email">Email</label>
                        <input
                            className="signup_in_email_input"
                            type="email"
                            placeholder="Enter your email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}//updates the email state variable
                        />
                    </div>
                    {/*password input field */}
                    <div className="password_box">
                        <label htmlFor="password">Password</label>
                        <input
                            className="signup_in_password_input"
                            type="password"
                            placeholder="Enter your password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}//updates the password state variable
                        />
                    </div>
                    {/*submit button*/}
                    <button type="submit" className="signup_in_button">Sign up</button>
                </form>
                {/*link to the login pageif user already has an account */}
                <Link to="/login">Already have an account? Log in</Link>
            </div>
        </div>
    );
}

export default Signup;
