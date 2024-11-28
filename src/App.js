import React from 'react';
import Navegacao from './Components/Navegacao';
import Planos from './Components/Planos';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navegacao />
      <h1>Meu plano</h1>
      <div>
        <Planos titulo="Corrida" descricao="Corrida leve de 30 minutos" duracao="30 minutos" />
        <Planos titulo="Yoga" descricao="Sessão de Yoga de 45 minutos" duracao="45 minutos" />
      </div>
      <Footer />
    </div>
  );
}

export default App;
