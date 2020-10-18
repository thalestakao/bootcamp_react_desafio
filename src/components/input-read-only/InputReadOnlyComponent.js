import React, { Component } from 'react';
import M from 'materialize-css';
import { formatNumber } from '../../helpers/formatData';
export default class InputReadOnlyComponent extends Component {
  constructor() {
    super();
    this.state = { baseINSS: 0 };
  }

  componentDidMount() {
    M.AutoInit();
  }
  componentDidUpdate() {
    M.updateTextFields();
  }
  handleSalary = (value, salary) => {
    if (salary) {
      const percent = (parseFloat(value) / parseFloat(salary)) * 100;
      return 'R$ ' + formatNumber(value) + ' (' + formatNumber(percent) + '%)';
    }
    return 'R$ ' + formatNumber(value);
  };
  render() {
    const { label, id, value, salary, color } = this.props;
    console.log(salary);
    return (
      <div className="input-field col s3">
        <input
          disabled
          id={id}
          type="text"
          className="validate"
          value={value ? this.handleSalary(value, salary) : ''}
          style={{ color: color ? color : '#000', fontWeight: 'bold' }}
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  }
}
