import React from 'react';
import Criterio from './Criterio';

const Valor = ({ nome, criterios }) => (
  <div className="valor__container">
    <p className="valor__title">{nome}</p>
    <ul>
      {criterios.map(criterio => (
        <Criterio key={criterio.nome} valor={nome} criterio={criterio} />
      ))}
    </ul>
  </div>
);

export default Valor;