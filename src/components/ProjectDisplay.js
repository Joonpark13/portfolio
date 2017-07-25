import React from 'react';
import PropTypes from 'prop-types';

import '../css/ProjectDisplay.css';

const ProjectDisplay = ({ title, img }) => {
    let bgStyle = {};

    if (img) {
        bgStyle = {
            backgroundImage: `linear-gradient(150deg, rgba(0,0,0,0.4), rgba(0,155,239,0.9)), url(${img})`
        };

        return (
            <div style={bgStyle} className="project-display-card">
                <img className="project-display-placeholder-img" src={img} alt="placeholder" />
                <h3 className="project-display-title">{title}</h3>
            </div>
        );
    } else {
        bgStyle = {
            backgroundImage: `linear-gradient(150deg, rgba(0,0,0,0.4), rgba(0,155,239,0.9))`
        };

        return (
            <div style={bgStyle} className="project-display-card project-display-card-small">
                <h4 className="project-display-title">{title}</h4>
            </div>
        );
    }
};

export default ProjectDisplay;

ProjectDisplay.PropTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string,
    img: PropTypes.string
};
