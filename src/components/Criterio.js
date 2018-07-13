import React from 'react';
import { FeedbackConsumer } from '../context/FeedbackContext';

const Criterio = ({ criterio: { nome = '', nota = '' }, valor }) => {
  
  const handleClick = (event, action) => {
    event.preventDefault();
    let novaNota = parseInt(event.target.innerText, 10);
    if (novaNota === nota) {
      novaNota = 0;
    }
    action({ valor, criterio: nome, nota: novaNota });
  };

  return (
    <FeedbackConsumer>
      {({ actions: { atualizarCriterio } }) => (
        <li className="valor__criterio">
          <div className="valor__criterio__nome">
            <span>{nome}</span>
          </div>
          <div
            className="valor__criterio__botoes"
            onClick={event => handleClick(event, atualizarCriterio)}
          >
            <button style={nota >= 1 && { backgroundColor: 'green' } || {}}>1</button>
            <button style={nota >= 2 && { backgroundColor: 'green' } || {}}>2</button>
            <button style={nota >= 3 && { backgroundColor: 'green' } || {}}>3</button>
            <button style={nota >= 4 && { backgroundColor: 'green' } || {}}>4</button>
            <button style={nota >= 5 && { backgroundColor: 'green' } || {}}>5</button>
          </div>
          {/* <div>
            <span>Nota Atual: {nota}</span>
          </div> */}
        </li>
      )}
    </FeedbackConsumer>
  );
};

export default Criterio;