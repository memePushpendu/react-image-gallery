import React, { Component } from 'react';
import Gallery from "./PhotoGrid";
import Routes from './routes';
class Photo extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <Gallery urls={[
                    "/react-image-gallery/img/Chrysanthemum.jpeg",
                    "/react-image-gallery/img/Desert.jpeg",
                    "/react-image-gallery/img/Hydrangeas.jpeg",
                    "/react-image-gallery/img/Jellyfish.jpeg",
                    "/react-image-gallery/img/Koala.jpeg",
                    "/react-image-gallery/img/Lighthouse.jpeg",
                ]} />
            </div>
        );
    }
}

export default Photo;
