import React from 'react';
import PropTypes from 'prop-types';

import Ripple from './Ripple.js';

import '../css/ProjectDisplay.css';

const ProjectDisplay = ({ title, img }) => {
    let bgStyle = {};

    const rippleStyle = {
        margin: '20px 0',
        width: '98%', // Leave room for shadow
        boxShadow: '5px 4px 3px var(--cool-gray-30)'
    };

    if (img) {
        bgStyle = {
            backgroundImage: `linear-gradient(150deg, rgba(0,0,0,0.4), rgba(0,155,239,0.9)), url(${img})`
        };

        return (
            <Ripple style={rippleStyle}>
                <div style={bgStyle} className="project-display-card">
                    <img className="project-display-placeholder-img" src={img} alt="placeholder" />
                    <h3 className="project-display-title">{title}</h3>
                </div>
            </Ripple>
        );
    } else {
        bgStyle = {
            backgroundImage: `linear-gradient(150deg, rgba(0,0,0,0.4), rgba(0,155,239,0.9))`
        };

        return (
            <Ripple style={rippleStyle}>
                <div style={bgStyle} className="project-display-card project-display-card-small">
                    <h4 className="project-display-title">{title}</h4>
                </div>
            </Ripple>
        );
    }
};

export default ProjectDisplay;

ProjectDisplay.PropTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string,
    img: PropTypes.string
};
