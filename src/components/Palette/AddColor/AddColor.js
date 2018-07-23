// Component which is used to render NewColorComponent when clicked.
import React from 'react';
import commonClasses from '../Palette.css';
import classes from './AddColor.css';

const addColor = (props) => {
  return (
    <div className={[commonClasses.card, classes.addColorCard].join(' ')} onClick={props.toggleModal} >
      <span className={classes.addIcon} role="img" aria-label="add icon">&#x2295;</span>
      <div className={commonClasses.addColorLabel}>Add color</div>
    </div>
  );
}

export default addColor;