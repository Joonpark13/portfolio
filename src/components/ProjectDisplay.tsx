import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import { ExpandLess } from '@material-ui/icons';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import OutsideClickHandler from 'react-outside-click-handler';

import Ripple from './Ripple';

import './ProjectDisplay.css';

type ProjectDisplayProps = {
  title: string;
  img?: string;
  large?: boolean;
  children: React.ReactNode;
};

function ProjectDisplay({
  title,
  img = '',
  large = false,
  children,
}: ProjectDisplayProps) {
  const [open, setOpen] = useState(false);
  const [animationCounter, setAnimationCounter] = useState(0);

  function handleOpen() {
    if (!open) {
      setTimeout(() => setOpen(true), 250);
      setAnimationCounter(animationCounter + 1);
    }
  }

  function handleClose() {
    setOpen(false);
  }

  let bgStyle = {};

  const floorStyles = ['project-display-floor'];
  const containerStyles = ['project-display-container'];
  const cardStyles = ['project-display-card'];
  const titleStyles = ['project-display-title'];
  const imageStyles = ['project-display-content-img'];

  if (large) {
    bgStyle = {
      backgroundImage: `linear-gradient(rgba(28, 73, 109,0.6), rgba(28, 73, 109,0.6)), url(${img})`, // Cerulean-70
    };
  } else {
    bgStyle = {
      backgroundImage: 'linear-gradient(rgb(23, 93, 141), rgb(23, 93, 141))', // Cerulean-60
    };

    cardStyles.push('small');
    titleStyles.push('small');
    imageStyles.push('small');
  }

  if (open) {
    containerStyles.push('open');
    floorStyles.push('open');
  }

  return (
    <OutsideClickHandler onOutsideClick={handleClose}>
      <div className={floorStyles.join(' ')}>
        <div
          onClick={handleOpen}
          className={containerStyles.join(' ')}
          role="button"
          tabIndex={0}
        >
          {open ? (
            <div className="project-display-expanded-header">
              <h3 className="project-display-expanded-title">{title}</h3>
              <IconButton onClick={handleClose} style={{ color: 'white' }}>
                <ExpandLess />
              </IconButton>
            </div>
          ) : (
            <Ripple>
              <div style={bgStyle} className={cardStyles.join(' ')}></div>
              {large ? (
                <h3 className={titleStyles.join(' ')}>{title}</h3>
              ) : (
                <h4 className={titleStyles.join(' ')}>{title}</h4>
              )}
            </Ripple>
          )}
        </div>
        <TransitionGroup>
          {open && (
            <CSSTransition
              classNames="expand-content"
              timeout={{ enter: 500, exit: 250 }}
            >
              <div
                key={title + animationCounter}
                className="project-display-expanded-content"
              >
                {img && (
                  <img
                    className={imageStyles.join(' ')}
                    src={img}
                    alt="project screenshot"
                  />
                )}
                {children}
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </OutsideClickHandler>
  );
}

export default ProjectDisplay;
