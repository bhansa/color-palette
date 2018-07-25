// Main app component which contains all other components and handles state.
import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import NewColorInput from '../components/NewColorInput/NewColorInput';
import Palette from '../components/Palette/Palette';

class App extends Component {
  state = {
    showNewColorInput: false,
    colors: [
      { value: '#000000'},
      { value: '#cccccc' },
      { value: '#ff0000' },
      { value: '#ffff00' },
      { value: '#0000ff' },
    ],
    copyIndex: -1,
    colorInput: '',
    validationMessage: ''
  }
  toggleInputValid = (colorInput, validationMessage) => {
    this.setState({
      colorInput,
      validationMessage
    });
  }
  // validating color code here
  validateColorCode = (event) => {
    let input = event.target.value;
    const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if(input.match(colorRegex)) {
      // Adding check for duplicate color for 3 digit hexcode
      if(input.length === 4) {
        let numerical = input.split('#')[1];
        input = `#${numerical}${numerical}`;
      }
      if(this.state.colors.length && this.state.colors.find(color => color.value === input)) {
        this.toggleInputValid('', 'Color already exists!');
      }
      else {
        this.toggleInputValid(input, '');
      }
    }
    else {
      this.toggleInputValid('', 'Invalid color code!');
    }
  }

  addColorHandler = (color) => {
    const colors = [...this.state.colors];
    colors.push({
      'value': color
    });
    this.setState({
      colors,
      showNewColorInput: false
    });
  }
  deleteColorHandler = (index) => {
    const colors = [...this.state.colors];
    colors.splice(index, 1);
    this.setState({
      colors
    });
  }
  toggleModalHandler = () => {
    const showNewColorInput = !this.state.showNewColorInput;
    this.setState({
      showNewColorInput
    });
  }
  copyCodeHandler = (index) => {
    this.setState({
      copyIndex: index
    });
    setTimeout(() => {
      this.setState({
        copyIndex: -1
      });
    }, 2000);
  }
  render() {
    let newColorInput = null;
    if(this.state.showNewColorInput) {
      newColorInput = <NewColorInput
        validateColorCode={this.validateColorCode}
        toggleModal={this.toggleModalHandler}
        validationMessage={this.state.validationMessage}
        addColor={this.addColorHandler}
        colorInput={this.state.colorInput}
      />;
    }
    return (
      <div className={classes.App}>
        <Cockpit />
        {newColorInput}
        <Palette
          colors={this.state.colors}
          deleted={this.deleteColorHandler}
          toggleModal={this.toggleModalHandler}
          copyCode={this.copyCodeHandler}
          copyIndex={this.state.copyIndex}
        />
      </div>
    );
  }
}

export default App;
