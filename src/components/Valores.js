import React from 'react';

import { FeedbackConsumer } from '../context/FeedbackContext';
import Valor from './Valor';

const Valores = () => (
  <FeedbackConsumer>
    {({ state: { valores } }) => (
      <div className="valores__container">
        { valores.map(({ nome, criterios }) => <Valor key={nome} nome={nome} criterios={criterios} />) }
      </div>
    )}
  </FeedbackConsumer>
);

export default Valores;