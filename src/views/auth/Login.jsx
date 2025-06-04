import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth,messaging } from '../../firebase/firebase';
import { useNavigate } from 'react-router-dom';
import { getToken } from "firebase/messaging";


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        try {
            let user = await signInWithEmailAndPassword(auth, email, password);
            if (user) {                
                //Set local storage
                localStorage.setItem("buffuser", user);
                navigate('/account'); // or your desired route
            }
        } catch (err) {
            setError('Login failed. Please check your credentials.');
            console.error(err);
        }
    };


    return (

        <div className="login-register-area ptb-100">
            <div className="offcanvas-body2">
                <div className="this-tab">
                    <div className="benifit-content2">
                        <h3>Login</h3>
                        <div className="login-area">
                            <form id="contactForm" className="contact-from" onSubmit={handleLogin}>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >Username or email address  *</label>
                                            <input type="text" id="name1" className="form-control" placeholder="Email Address" required value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label >Password  *</label>
                                            <input id="password-field" type="password" className="form-control" name="password" placeholder="Password" required value={password}
                                                onChange={(e) => setPassword(e.target.value)} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <button type="submit" className="deafult-btn1">Login</button>
                                        <div id="msgSubmit" className="h3 text-center hidden"></div>
                                        <div className="clearfix"></div>
                                        {error && <div className="text-danger mb-2">{error}</div>}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
