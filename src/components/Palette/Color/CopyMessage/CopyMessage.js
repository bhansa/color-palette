// Component to show copy message when we click on Color component. It will copy the color code of the selected Color component to the clipboard.
import React from 'react';
import classes from "./CopyMessage.css";

const colorComponent = (props) => {
  return (
    <div className={classes.copyMessageContainer}>
      <div className={classes.copyMessage}>
        <div className={classes.copyMessageIcon}>&#10003;</div>
        <div className={classes.copyMessageText}>Copied to clipboard</div>
      </div>
    </div>
  );
}

export default colorComponent;