// Component containing AddColor and multiple Color components. 
import React from 'react';
import classes from './Palette.css';
import AddColor from './AddColor/AddColor';
import Color from './Color/Color';

const palette = (props) => {
  let colors = props.colors.map((color, index) =>
    <Color
      color={color.value}
      key={color.id}
      deleted={() => {props.deleted(index)}}
    />
  );
  return (
    <div className={classes.palette}>
      <AddColor toggleModal={() => {props.toggleModal()}} />
      {colors}
    </div>
  );
}

export default palette;