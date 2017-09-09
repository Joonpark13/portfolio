import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import ExpandLessIcon from 'material-ui-icons/ExpandLess';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import withClickOutside from 'react-click-outside';

import Ripple from './Ripple';

import '../css/ProjectDisplay.css';

class ProjectDisplay extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      animationCounter: 0,
    };

    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    if (!this.state.open) {
      setTimeout(
        () => this.setState({ open: true }),
        250,
      );
      this.setState({ animationCounter: this.state.animationCounter + 1 });
    }
  }

  handleClose() {
    this.setState({ open: false });
  }

  handleClickOutside() {
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
        backgroundImage: `linear-gradient(rgba(28, 73, 109,0.6), rgba(28, 73, 109,0.6)), url(${this.props.img})`, // Cerulean-70
      };
    } else {
      bgStyle = {
        backgroundImage: 'linear-gradient(rgb(23, 93, 141), rgb(23, 93, 141))', // Cerulean-60
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
        <div onClick={this.handleOpen} className={containerStyles.join(' ')} role="button" tabIndex="0">
          {this.state.open
            ? (
              <div className="project-display-expanded-header">
                <h3 className="project-display-expanded-title">{this.props.title}</h3>
                <IconButton onClick={this.handleClose} style={{ color: 'white' }}>
                  <ExpandLessIcon />
                </IconButton>
              </div>
            ) : (
              <Ripple>
                <div style={bgStyle} className={cardStyles.join(' ')}></div>
                {this.props.large
                  ? <h3 className={titleStyles.join(' ')}>{this.props.title}</h3>
                  : <h4 className={titleStyles.join(' ')}>{this.props.title}</h4>
                }
              </Ripple>
            )
          }
        </div>
        <ReactCSSTransitionGroup
          transitionName="expand-content"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={250}
        >
          {this.state.open &&
            <div
              key={this.props.title + this.state.animationCounter}
              className="project-display-expanded-content"
            >
              {this.props.img &&
                <img
                  className="project-display-content-img"
                  src={this.props.img}
                  alt="project screenshot"
                />
              }
              {this.props.children}
            </div>
          }
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default withClickOutside(ProjectDisplay);

ProjectDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string,
  large: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

ProjectDisplay.defaultProps = {
  img: '',
  large: false,
  children: undefined,
};
