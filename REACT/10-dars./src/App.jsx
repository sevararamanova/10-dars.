import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import './App.css';

function App() {
    return (
       
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
            </Routes>
    
    );
}

export default App
