import React, { Component } from 'react';
import PropTypes from "prop-types";
// import Lightbox from 'lightbox-react';

import './Photo.css';

class Gallery extends Component {
    constructor(props) {
        super(props);
        // this.props.urls:[imageUrls],
        this.state = {
            // loading: true,
            // imageUrl:[]
            // photos: []
        };
    }


    // handleImageChange = () => {
    //     this.setState({
    //         loading: !imagesLoaded(this.galleryElement)
    //     });
    // };

    // renderImage(imageUrl) {
    //     return (
    //         <div key={Math.random() * 100000000000000000000000000000000000000}>
    //             <img src={imageUrl}
    //                 onLoad={this.handleImageChange}
    //                 onError={this.handleImageChange}

    //             />
    //         </div>
    //     );
    // }

    PhotoBlock() {
        var numImages = this.props.imageUrls.length;

        if (numImages === 1) {
            return (
                <div className="photoBlock">
                    <img className="cell_1" src={this.props.imageUrls[0]} />
                </div>
            );
        }
        if (numImages === 2) {
            return (
                <div className="photoBlock">
                    <img className="cell_2h" src={this.props.imageUrls[0]} />
                    <img className="cell_2h" src={this.props.imageUrls[1]} />
                </div>
            );
        }
        if (numImages === 3) {
            return (
                <div className="photoBlock">
                    <img className="cell_3h" src={this.props.imageUrls[0]} />
                    <img className="cell_3h" src={this.props.imageUrls[1]} />
                    <img className="cell_3h" src={this.props.imageUrls[2]} />
                </div>
            );
        }
        if (numImages === 4) {
            return (
                <div className="photoBlock">
                    <img className="cell_3h" src={this.props.imageUrls[0]} />
                    <img className="cell_3h" src={this.props.imageUrls[1]} />
                    <img className="cell_3h" src={this.props.imageUrls[2]} />
                    <img className="cell_3h" src={this.props.imageUrls[3]} />

                </div>

            );

        }

        else {
            return (
            <div className="photoBlock">
                <img className="cell_3h" src={this.props.imageUrls[0]} />
                <img className="cell_3h" src={this.props.imageUrls[1]} />
                <img className="cell_3h" src={this.props.imageUrls[2]} />
                <span type="text" className="cell_4h"  >+
       {numImages-3}
                </span>
            </div>
           
            );
        }
    }
    render() {



        return (
            <div className="gallery"
                ref={element => {
                    this.galleryElement = element;
                }
                }
            >
                {/*<div className="images">
                    {this.props.imageUrls.map((imageUrl) => this.renderImage(imageUrl))}
                
                </div>*/}

                {this.PhotoBlock()}
            
            </div>
        );
    }
}
// function imagesLoaded(parentNode) {
//     const imgElements = [...parentNode.querySelectorAll("img")];
//     for (let i = 0; i < imgElements.length; i += 1) {
//         const img = imgElements[i];
//         if (!img.complete) {
//             return false;
//         }
//     }
//     return true;

// }

// Gallery.propTypes = {
//     imageUrls: React.PropTypes.indexOf(React.PropTypes.string).isRequired
// };


export default Gallery;
