import React, { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import Login from './components/Login'
import Player from './components/Player'
import { getTokenFromUrl } from './spotify';
import spotifyWebApi from 'spotify-web-api-js';

const spotify = new spotifyWebApi();

function App() {

  const [token, setToken] = useState(null);

  useEffect(() => {
    const hash = getTokenFromUrl();
    const _token = hash.access_token;

    if(_token) {
      setToken(_token);

      spotify.setAccessToken(_token);
    }

    window.location.hash = "";
  }, []);

  return (
    <div className="app">

      {
        token ? (
          <Player />
        ) : (
          <Login />
        )
      }

    </div>
  );
}

export default App;
