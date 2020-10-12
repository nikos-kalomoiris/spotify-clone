import React from 'react';
import { loginUrl } from '../spotify';
import './Login.css'

const Login = () => {
    return (
        <div className="login">
            <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png" alt="Spotify Logo"/>
            <a href={loginUrl}>Login With Spotify</a>
        </div>
    );
}

export default Login;