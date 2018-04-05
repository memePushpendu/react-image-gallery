import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import registerServiceWorker from './registerServiceWorker';
import Gallery from "./PhotoGrid";
import LightboxExample from "./Lightbox";


let urls = [
    "http://magickalgraphics.com/Graphics/Miscellaneous/Flowers/flowers140.jpg",
    "https://i.pinimg.com/originals/57/50/dc/5750dcbce6fdaaf8ec79dade90d2790a.jpg",
    "http://cdn.wonderfulengineering.com/wp-content/uploads/2016/01/Desktop-Wallpaper-4.jpg",
    "https://i.pinimg.com/originals/57/50/dc/5750dcbce6fdaaf8ec79dade90d2790a.jpg",
    "http://hdfreewallpaper.net/wp-content/uploads/2015/12/Corgi-Wallpaper-small-free-hd-for-desktop.jpg",
    "http://www.blackcatcoffeeservice.com/wp-content/uploads/2017/11/small-apple-logo-fire-apple-logo-hd-wallpaper-vector-designs-wallpapers-creat-business-card.jpg"
];
ReactDOM.render(<LightboxExample imageUrls={urls} />, document.getElementById('root'));
// registerServiceWorker();
