import React, { Component } from 'react';
import { render } from 'react-dom';
import Table from './Table';
import SliderComp from './Components/SliderComp'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
      <h1>Slider and Table componnt</h1>
        <SliderComp range={['', 8, '', 16, '', 24, 48, 96]} defaultVal={8}/>
        <Table />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
