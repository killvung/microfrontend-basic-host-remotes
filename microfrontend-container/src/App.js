import React from 'react';
import Images from 'images_remote/App';
import Videos from 'videos_remote/App';
import './App.css';

const App = () => (
    <div>
        <div className="Images__wrapper">
            <h1>Search for images</h1>
            <Images />
        </div>
        <div className="Videos__wrapper">
            <h1>Search for videos</h1>
            <Videos />
        </div>
    </div>
)

export default App;