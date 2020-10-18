import React, { Component } from 'react';
import M from 'materialize-css';

export default class InputFullSalaryComponent extends Component {
  handleOnChange = (event) => {
    const value = event.target.value;
    this.props.onChangeInput(value);
  };
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="row">
        <div className="input-field col s12">
          <input
            id="salary"
            type="number"
            className="validate"
            onChange={this.handleOnChange}
          />
          <label htmlFor="salary">Salário bruto</label>
        </div>
      </div>
    );
  }
}
