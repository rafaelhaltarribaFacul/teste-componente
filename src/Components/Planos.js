import React from 'react';

function Planos({ titulo, descricao, duracao }) {
    return (
    <div className="bloco-planos">
      <strong>{titulo}</strong>
      <p>{descricao}</p>
      <p>Duração: {duracao}</p>
      <div className="botoes">
        <button>Ver Detalhes</button>
        <button>Remover</button>
      </div>
    </div>
    );
}

export default Planos;