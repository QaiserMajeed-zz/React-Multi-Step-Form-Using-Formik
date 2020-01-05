import React, { Component } from 'react';

const LayoutText = (props) => {

    return (

        <div className='section-space--inner--120'>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="video-cta-content">
                            <h2 className="video-cta-content__title">The Revolution is here</h2>
                            <p className="video-cta-content__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
                            <a href={`${process.env.PUBLIC_URL}/contact-us`} className="btn btn-primary custom-button">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LayoutText;