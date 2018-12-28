import React, { Component } from 'react';

class RecoveryOption extends Component {
  state = {
    value: 6
  };

  handleChange = e => {};

  render() {
    return (
      <div className="option">
        <label className="option__label">
          Recovery option
          <input
            className="option__input-text"
            type="text"
            value={value}
            min={min}
            max={max}
            onChange={this.handleChange}
            style={{ display: 'block', width: '30rem', padding: 4 }}
          />
        </label>
        <input
          className="option__input-range"
          type="range"
          min={6}
          max={36}
          step={6}
          onChange={this.handleChange}
          value={value}
        />
      </div>
    );
  }
}

export default RecoveryOption;
