// Component containing individual color. Can delete/update itself on clicking Delete button on top-right corner.
import React from 'react';
import commonClasses from '../Palette.css';
// import classes from "./Color.css";

const colorComponent = (props) => {
  let colorCode = '#' + props.color;
  let bgStyle = {
    backgroundColor: colorCode
  };
  return (
    <div className={commonClasses.card} style={bgStyle}>
      <span onClick={props.deleted} className={commonClasses.delete} role="img" aria-label="delete icon">&#10060;</span>
      <div className={commonClasses.cardLabel} contentEditable="true">{colorCode}</div>
    </div>
  );
}

export default colorComponent;