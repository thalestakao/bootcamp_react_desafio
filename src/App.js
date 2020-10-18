import React, { Component } from 'react';
import HeaderComponent from './components/header/HeaderComponent';
import InputFullSalaryComponent from './components/input-full-salary/InputFullSalaryComponent';
import InputReadOnlyComponent from './components/input-read-only/InputReadOnlyComponent';
import ProgressBarSalaryComponent from './components/progress-bar-salary/ProgressBarSalaryComponent';
import { calculateSalaryFrom } from './helpers/salary';
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      fullSalary: {},
    };
  }
  calculeSalary = (value) => {
    const fullSalary = calculateSalaryFrom(value);
    this.setState({ fullSalary });
  };
  render() {
    return (
      <div className="container">
        <HeaderComponent />
        <InputFullSalaryComponent onChangeInput={this.calculeSalary} />
        <div className="row">
          <InputReadOnlyComponent
            value={this.state.fullSalary.baseINSS}
            id="baseINSS"
            label="Base INSS:"
          />
          <InputReadOnlyComponent
            salary={this.state.fullSalary.baseINSS}
            value={this.state.fullSalary.discountINSS}
            color="#e67e22"
            id="descontoINSS"
            label="Desconto INSS:"
          />
          <InputReadOnlyComponent
            value={this.state.fullSalary.baseIRPF}
            id="baseIRPF"
            label="Base IRPF:"
          />
          <InputReadOnlyComponent
            salary={this.state.fullSalary.baseINSS}
            value={this.state.fullSalary.discountIRPF}
            color="#c0392b"
            id="descontoIRPF"
            label="Desconto IRPF:"
          />
        </div>
        <div className="row">
          <InputReadOnlyComponent
            salary={this.state.fullSalary.baseINSS}
            value={this.state.fullSalary.netSalary}
            color="#16a085"
            id="salarioLiquido"
            label="Salário líquido:"
          />
        </div>
        <div className="row">
          <ProgressBarSalaryComponent fullSalary={this.state.fullSalary} />
        </div>
      </div>
    );
  }
}
