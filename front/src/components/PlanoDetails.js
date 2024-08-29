// PlanoDetails.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PlanosContext } from '../context/PlanosContext'; // Ajustar o caminho do contexto

function PlanoDetails() {
  const { planos } = useContext(PlanosContext);
  const { id } = useParams();
  const plano = planos.find(p => p.id === parseInt(id));

  return (
    <div>
      <h2>Detalhes do Plano</h2>
      {/* Renderizar as informações do plano */}
      <p>Nome: {plano.nome}</p>
      <p>Valor: {plano.valor}</p>
      {/* ... outros detalhes */}
    </div>
  );
}

export default PlanoDetails;