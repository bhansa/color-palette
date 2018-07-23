// Main app component which contains all other components and handles state.
import React, { Component } from 'react';
import classes from './App.css';
import Cockpit from '../components/Cockpit/Cockpit';
import NewColorInput from '../components/NewColorInput/NewColorInput';
import Palette from '../components/Palette/Palette';

class App extends Component {
  state = {
    showNewColorInput: false,
    addButtonDisabled: true,
    input: '',
    colors: [
      { id: 'A1234', value: '#000000'},
      { id: 'A1434', value: '#cccccc' },
      { id: 'A1765', value: '#ff0000' },
      { id: 'A1678', value: '#ffff00' },
      { id: 'A1342', value: '#0000ff' },
    ]
  }

  // validating color code here
  validateColorCode = (event) => {
    this.state.input = event.target.value;
    const colorRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    if(this.state.input.match(colorRegex)){
      this.setState({
        addButtonDisabled: false
    })
    }
    else{
      this.setState({
        addButtonDisabled: true
      })
    }
  }

  addColorHandler = (event) => {
    const colors = [...this.state.colors];
    colors.push({
      'id': 'A212',
      'value': this.state.input
      });
    this.setState({
      colors,
      showNewColorInput: false
    })
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
  render() {
    let newColorInput = null;
    if(this.state.showNewColorInput) {
      newColorInput = <NewColorInput addColorHandler={this.addColorHandler} addButtonDisabled={this.state.addButtonDisabled} validateColorCode={this.validateColorCode} toggleModal={this.toggleModalHandler} />;
    }
    return (
      <div className={classes.App}>
        <Cockpit />
        {newColorInput}
        <Palette colors={this.state.colors} deleted={this.deleteColorHandler} toggleModal={this.toggleModalHandler} />
      </div>
    );
  }
}

export default App;
