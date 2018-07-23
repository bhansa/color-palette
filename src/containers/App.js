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
      // { value: '#000000' },
      // { value: '#cccccc' },
      // { value: '#ff0000' },
      // { value: '#ffff00' },
      // { value: '#0000ff' },
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
  validateInputHandler = (event) => {
    const input = event.target.value;
    // this.toggleInputValid(false);
    let re = /^[0-9a-fA-F]{6}/g;
    let firstChar = input[0];
    let inputArray = input.split('#');
    if(input.length === 7 && firstChar === '#' && inputArray.length === 2 && re.test(inputArray[inputArray.length - 1])) {
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
      value: color
    });
    this.setState({
      colors
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
    this.toggleInputValid('', 'Input is empty!')
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
        toggleModal={this.toggleModalHandler}
        colorInput={this.state.colorInput}
        checkValid={this.validateInputHandler}
        validationMessage={this.state.validationMessage} 
        addColor={this.addColorHandler}
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
