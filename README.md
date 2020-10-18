# Desafio

## ENUNCIADO

1.  Implementar, utilizando React, uma aplicação denominada "react-salario" que possuirá um input editável e disversos outros inputs somente-leitura, para exibir informações sobre o cálculo de salário líquido conforme as leis da CLT em 2020. Só devem ser considerados os cálculos de desconto de INSS e IRPF, ou seja, outros
    descontos e dependentes devem ser ignorados. Os valores abaixo a serem exibidos são:

    - Salário Bruto
    - Base INSS (somente-leitura)
    - Desconto INSS (somente-leitura)
    - Desconto IRPF (somente-leitura)
    - Salário líquido (somente-leitura)

2.  O siste de referência para regreas de cálculo e comparação de valores calculados, deve ser o: [https://www.todacarreira.com/calculo-salario-liquido/](https://www.todacarreira.com/calculo-salario-liquido/)

3.  Além dos cálculos, o aluno deverá implementar uma barra horizontal indicando, com cores diferenciadas:
    - Percentual de desconto de INSS
    - Percentual de desconto do IRPF
    - Salário Líquido
4.  A soma dos três valores acima deve ser exatamente o valor do salário bruto (100%)

## Pontos de atenção ao trabalho verificados durante o desenvolvimento

- A utilização do materialize gerou alguns problemas:
  1.  Os campos de placeholder e label estavam ficando embaralhdos junto com os valores de cada input. Solução:

```javascript
import M from 'materialize-css';
componentDidMount() {
    M.AutoInit();
  }
  componentDidUpdate() {
    M.updateTextFields();
  }
```

    1. Implementação das barras de progresso:
    	A barra referente ao IRPF deve ter sua % calculada a partir do desconto do INSS + desconto IRPF
    	Outro ponto importante é fazer a utilização de uma div com position relative e mais 3 divs internas com position absolute
    	```javascript

return (
<div style={box}>
<div style={totalStyles}></div>
<div style={discountInssBarStyles}></div>
<div style={discountIrpfBaStyles}></div>
</div>
);

````
## Executar o projeto
```bash
yarn
yarn start
````
