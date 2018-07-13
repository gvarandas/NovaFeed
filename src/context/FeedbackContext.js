import React, { Component } from 'react';

const valores = [
  {
    nome: 'Always do Better',
    criterios: [
      { nome: 'Se envolve na comunidade da sua área de atuação', nota: 0 },
      { nome: 'Possui reconhecida qualidade técnica', nota: 0 },
      { nome: 'Estuda e compartilha informações constantemente', nota: 0 },
    ],
  },
  {
    nome: 'Build Trust',
    criterios: [
      { nome: 'Sabe lidar com conflitos', nota: 0 },
      { nome: 'É presente, tem auto-organização e pontualidade', nota: 0 },
      { nome: 'Possui ótima habilidade de comunicação', nota: 0 },
    ],
  },
  {
    nome: 'Co-Creation',
    criterios: [
      { nome: 'É proativo para dar e receber feedbacks', nota: 0 },
      { nome: 'Se engaja em iniciativas organizacionais', nota: 0 },
      { nome: 'Age ativamente em todas as fases dos projetos', nota: 0 },
    ],
  },
  {
    nome: 'Empowerment',
    criterios: [
      { nome: 'Atua com proatividade', nota: 0 },
      { nome: 'Expõe sua opinião', nota: 0 },
      { nome: 'Tem postura de liderança', nota: 0 },
    ],
  },
  {
    nome: 'Glow in the Look',
    criterios: [
      { nome: 'Demonstra curiosidade', nota: 0 },
      { nome: 'Traz inovação para projetos', nota: 0 },
      { nome: 'Organiza/participa de eventos da Novatics', nota: 0 },
    ],
  },
];

const { Provider, Consumer } = React.createContext();

export const FeedbackConsumer = Consumer;

export class FeedbackProvider extends Component {
  state = {
    valores,
  }

  atualizarCriterio = ({ valor, criterio, nota }) => {
    const novosValores = this.state.valores.map(elementValor => {
      if (elementValor.nome === valor) {
        return {
          ...elementValor,
          criterios: elementValor.criterios.map(elementCriterio => {
            if (elementCriterio.nome === criterio) {
              return { ...elementCriterio, nota };
            }
            return elementCriterio;
          })
        };
      }
      return elementValor;
    });
    this.setState({ valores: novosValores });
  }

  render() {
    return (
      <Provider value={{
        state: this.state,
        actions: {
          atualizarCriterio: this.atualizarCriterio,
        },
      }}>
        {this.props.children}
      </Provider>
    )
  }
}