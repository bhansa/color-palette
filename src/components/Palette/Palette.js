// Component containing AddColor and multiple Color components. 
import React from 'react';
import classes from './Palette.css';
import AddColor from './AddColor/AddColor';
import Color from './Color/Color';

const palette = (props) => {
  let colors = props.colors.map((color, index) => {
    if (props.copyIndex === index ) {
      return <Color
        color={color.value}
        key={index}
        deleted={() => { props.deleted(index) }}
        copyCode={() => { props.copyCode(index) }}
        copyIndex={props.copyIndex}
      />
    }
    else {
      return <Color
        color={color.value}
        key={index}
        deleted={() => { props.deleted(index) }}
        copyCode={() => { props.copyCode(index) }}
      />
    }
  });
  return (
    <div className={classes.palette}>
      <AddColor toggleModal={() => {props.toggleModal()}} />
      {colors}
    </div>
  );
}

export default palette;