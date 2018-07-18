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
        />
    );
    return (
        <div className={classes.palette}>
            <AddColor />
            {colors}
        </div>
    );
}

export default palette;