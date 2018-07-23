// Component to add new color when we click on AddColor component. Invisible by default, visible only when we click on AddColor component. Right now this contains nothing
import React from 'react';
import classes from './NewColorInput.css';

const newColorInput = (props) => {
  let colorInput = props.colorInput, validationMessage, addButton;
  if(colorInput) {
    validationMessage = null;
    addButton = <button className={classes.addButton} onClick={() => { props.addColor(colorInput); props.toggleModal()}}>Add</button>;
  }
  else {
    validationMessage = <span className={classes.validationMessage}>{props.validationMessage}</span>;
    addButton = <button className={classes.addButton} disabled="disabled">Add</button>;
  }
  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modalContent}>
        <div className={classes.modalClose} onClick={props.toggleModal}>&#10005;</div>
        <div className={classes.modalHeader}>Add New Color</div>
        <div className={classes.inputBody}>
          <input type="text" className={classes.inputField} placeholder="#cccccc" onKeyUp={props.checkValid} onChange={props.checkValid} ref={input => input && input.focus()} />
          {validationMessage}
        </div>
        <div className={classes.buttonContainer}>
          {addButton}
          <button className={classes.cancelButton} onClick={props.toggleModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default newColorInput;