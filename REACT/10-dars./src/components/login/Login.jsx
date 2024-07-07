import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('Enter your email');
    const [passwordError, setPasswordError] = useState('Password must be at least 6 characters.');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const validateEmail = (value) => {
        if (!value.includes('@')) {
            setEmailError('Enter your email');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = (value) => {
        if (value.length < 6) {
            setPasswordError('Password must be at least 6 characters.');
        } else {
            setPasswordError('');
        }
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        validateEmail(value);
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value);
        validatePassword(value);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        validateEmail(email);
        validatePassword(password);
        if (emailError || passwordError) {
            return;
        }
        try {
            const response = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            if (response.ok) {
                localStorage.setItem('token', data.token);
                navigate('/dashboard');
            } else {
                if (data && data.error) {
                    setError(data.error);
                } else {
                    setError('Login failed. Please try again.');
                }
            }
        } catch (error) {
            setError('Login failed. Please try again.');
        }
    };

    return (
        <div className="login-page">
            <h1>Welcome back!</h1>
            <p>Hey, welcome to your special place</p>
            <form onSubmit={handleLogin} className="login-form">
             
                {error && <p className="error">{error}</p>}
                <div>
                    <label htmlFor="email">Email:</label><br></br>
                    <input 
                        type="email" 
                        id="email" 
                        value={email} 
                        placeholder='Enter your email'
                        onChange={handleEmailChange} 
                        required 
                    />
                    {emailError && <p className="error">{emailError}</p>}
                </div>
                <div>
                    <label htmlFor="password">Password:</label><br></br>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder='Enter your email'
                        value={password} 
                        onChange={handlePasswordChange} 
                        required 
                    />
                    {passwordError && <p className="error">{passwordError}</p>}
                </div>
                <button type="submit">Log in</button>
            </form>
        </div>
    );
};

export default Login;
