import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import CloseIcon from 'material-ui-icons/Close';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Ripple from './Ripple.js';

import '../css/ProjectDisplay.css';

class ProjectDisplay extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: false,
            animationCounter: 0
        };

        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleOpen() {
        if (!this.state.open) {
            setTimeout(
                () => this.setState({ open: true }),
                250
            );
            this.setState({ animationCounter: this.state.animationCounter + 1 });
        }
    }

    handleClose() {
        this.setState({ open: false });
    }

    render() {
        let bgStyle = {};

        const floorStyles = ['project-display-floor'];
        const containerStyles = ['project-display-container'];
        const cardStyles = ['project-display-card'];
        const titleStyles = ['project-display-title'];

        if (this.props.large) {
            bgStyle = {
                backgroundImage: `linear-gradient(150deg, rgba(0,0,0,0.4), rgba(0,155,239,0.9)), url(${this.props.img})`
            };

        } else {
            bgStyle = {
                backgroundImage: `linear-gradient(150deg, rgba(0,0,0,0.4), rgba(0,155,239,0.9))`
            };

            cardStyles.push('small');
            titleStyles.push('small');
        }

        if (this.state.open) {
            containerStyles.push('open');
            floorStyles.push('open');
        }

        return (
            <div className={floorStyles.join(' ')}>
                <div onClick={this.handleOpen} className={containerStyles.join(' ')}>
                    {this.state.open ?
                        <div className="project-display-expanded-header">
                            <h3 className='project-display-expanded-title'>{this.props.title}</h3>
                            <IconButton onClick={this.handleClose} style={{ color: 'white' }}>
                                <CloseIcon />
                            </IconButton>
                        </div>
                    :
                        <Ripple>
                            <div style={bgStyle} className={cardStyles.join(' ')}>
                            </div>
                            {this.props.large ?
                                <h3 className={titleStyles.join(' ')}>{this.props.title}</h3>
                            :
                                <h4 className={titleStyles.join(' ')}>{this.props.title}</h4>
                            }
                        </Ripple>
                    }
                </div>
                <ReactCSSTransitionGroup
                    transitionName="expand-content"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={250}
                >
                    {this.state.open &&
                        <div key={this.props.title + this.state.animationCounter} className="project-display-expanded-content">
                            {this.props.img &&
                                <img className="project-display-content-img" src={this.props.img} alt="project screenshot" />
                            }
                            {this.props.children}
                        </div>
                    }
                </ReactCSSTransitionGroup>
            </div>
        );

    }
}

export default ProjectDisplay;

ProjectDisplay.PropTypes = {
    title: PropTypes.string.isRequired,
    mode: PropTypes.string,
    img: PropTypes.string
};
