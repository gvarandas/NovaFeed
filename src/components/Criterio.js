import React from 'react';
import { FeedbackConsumer } from '../context/FeedbackContext';

const Criterio = ({ criterio: { nome = '', nota = '' }, valor }) => {
  
  const handleClick = (event, action) => {
    event.preventDefault();
    const novaNota = parseInt(event.target.innerText, 10);
    if (novaNota !== nota) {
      action({ valor, criterio: nome, nota: novaNota });
    }
  };

  return (
    <FeedbackConsumer>
      {({ actions: { atualizarCriterio } }) => (
        <li className="valor__criterio">
          <span>{nome}</span>
          <div className="valor__criterio__botoes" onClick={event => handleClick(event, atualizarCriterio)}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
          </div>
          <div>
            <span>Nota Atual: {nota}</span>
          </div>
        </li>
      )}
    </FeedbackConsumer>
  );
};

export default Criterio;