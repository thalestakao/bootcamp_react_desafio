import React, { Component } from 'react';
import css from './header.module.css';
export default class HeaderComponent extends Component {
  render() {
    return (
      <div className={css.header}>
        <h4>Cálculo com desconto de INSS + IRPF</h4>
        <h1>React Salário</h1>
      </div>
    );
  }
}
