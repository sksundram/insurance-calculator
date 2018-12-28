import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Options from './components/Options';
import Chart from './components/Chart';

class App extends Component {
  state = {
    fields: [
      {
        id: 1,
        title: 'Desired replacement income (after-tax)',
        amount: 0,
        min: 0,
        max: 2500
      },
      {
        id: 2,
        title: 'Out-of-pocket healthcare expenses',
        amount: 0,
        min: 0,
        max: 2500
      },
      {
        id: 3,
        title: 'Home modification expenses',
        amount: 0,
        min: 0,
        max: 2500
      },
      {
        id: 4,
        title: 'Medical homecare expenses',
        amount: 0,
        min: 0,
        max: 2500
      },
      {
        id: 5,
        title: 'Other expenses (transport, children, etc)',
        amount: 0,
        min: 0,
        max: 2500
      },
      { id: 6, title: 'Recovery period', amount: 0, min: 6, max: 36, step: 6 }
    ]
  };

  render() {
    return (
      <div className="app">
        <Header />
        <div className="app__content" style={{ position: 'relative' }}>
          <Options fields={this.state.fields} />
          <Chart />
        </div>
      </div>
    );
  }
}

export default App;
