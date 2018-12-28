import React, { Component } from 'react';
import Option from './Option';

class Options extends Component {
  render() {
    return (
      <div className="options">
        {this.props.fields.map(field => (
          <Option key={field.id} field={field} />
        ))}
      </div>
    );
  }
}

export default Options;
