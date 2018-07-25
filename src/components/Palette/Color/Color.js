// Component containing individual color. Can delete/update itself on clicking Delete button on top-right corner.
import React from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import commonClasses from '../Palette.css';
import CopyMessage from './CopyMessage/CopyMessage';
// import classes from "./Color.css";

const colorComponent = (props) => {
  let bgStyle = {
    backgroundColor: props.color
  };
  let copyMessage = null;
  if (props.copyIndex !== undefined) {
    copyMessage = <CopyMessage />
  }
  return (
    <CopyToClipboard text={props.color} onCopy={(props.copyCode)}>
      <div className={commonClasses.colorContainer}>
        <div className={commonClasses.card} style={bgStyle} onClick={props.copyCode}>
          <span onClick={(event) => { event.stopPropagation(); props.deleted() }} className={commonClasses.delete} role="img" aria-label="delete icon">&#10060;</span>
          <div className={commonClasses.cardLabel} contentEditable="true" onClick={(event) => { event.stopPropagation() }}>{props.color}</div>
          {copyMessage}
        </div>
      </div>
    </CopyToClipboard>
  );
}

export default colorComponent;