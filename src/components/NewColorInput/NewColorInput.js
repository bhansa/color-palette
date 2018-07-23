// Component to add new color when we click on AddColor component. Invisible by default, visible only when we click on AddColor component. Right now this contains nothing
import React from 'react';
import classes from './NewColorInput.css';

const newColorInput = (props) => {
  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <div className={classes.modalClose} onClick={props.toggleModal}>&#10005;</div>
        <div className={classes.modalHeader}>Add New Color</div>
        <div className={classes.inputBody}>
          <input type="text" className={classes.inputField} placeholder="#cccccc" onKeyUp={props.validateColorCode} />
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.addButton} disabled={props.addButtonDisabled} onClick={props.addColorHandler}>Add</button>
          <button className={classes.cancelButton} onClick={props.toggleModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default newColorInput;