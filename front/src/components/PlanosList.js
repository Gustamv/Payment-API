// PlanosList.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PlanosContext } from '../context/PlanosContext';

function PlanosList() {
  const { planos } = useContext(PlanosContext);

  return (
    <div>
      <h2>Planos Disponíveis</h2>
      <ul>
        {planos.map(plano => (
          <li key={plano.id}>
            <Link to={`/planos/${plano.id}`}>{plano.nome}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PlanosList;