import React, { Component } from 'react';
export default class ProgressBarSalaryComponent extends Component {
  constructor() {
    super();
  }

  render() {
    const { baseINSS, discountINSS, discountIRPF } = this.props.fullSalary;
    let valueInss = (discountINSS / baseINSS) * 100;
    let valueIrpf = valueInss + (discountIRPF / baseINSS) * 100;
    if (!baseINSS) {
      valueInss = 0;
      valueIrpf = 0;
    }

    const box = {
      position: 'relative',
    };

    const totalStyles = {
      height: 20,
      width: '100%',
      backgroundColor: '#16a085',
      borderRadius: 50,
      position: 'absolute',
      zIndex: 1,
    };

    const discountInssBarStyles = {
      height: 20,
      width: `${valueInss}%`,
      backgroundColor: '#e67e22',
      borderRadius: 50,
      position: 'absolute',
      zIndex: 10,
    };

    const discountIrpfBaStyles = {
      height: 20,
      width: `${valueIrpf}%`,
      backgroundColor: '#c0392b',
      borderRadius: 50,
      textAlign: 'right',
      position: 'absolute',
      zIndex: 2,
    };
    return (
      <div style={box}>
        <div style={totalStyles}></div>
        <div style={discountInssBarStyles}></div>
        <div style={discountIrpfBaStyles}></div>
      </div>
    );
  }
}
