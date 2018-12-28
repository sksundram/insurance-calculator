import React, { Component } from 'react';

class Option extends Component {
  state = {
    value: this.props.field.amount
  };

  handleChange = e => this.setState({ value: e.target.value });

  render() {
    const { value } = this.state;
    const { title, amount, min, max, step } = this.props.field;

    return (
      <div className="option" style={{ marginBottom: 29 }}>
        <label className="option__label">
          <span>{title}</span>
          <input
            className="option__input-text"
            type="text"
            value={value}
            min={min}
            max={max}
            onChange={this.handleChange}
            style={{
              marginTop: 14,
              marginBottom: 8,
              display: 'block',
              width: '30rem',
              padding: 8,
              borderRadius: 3,
              border: '1px solid #ccc'
            }}
          />
        </label>
        <input
          className="option__input-range"
          type="range"
          min={min}
          max={max}
          step={step}
          onChange={this.handleChange}
          value={value}
        />
      </div>
    );
  }
}

export default Option;
