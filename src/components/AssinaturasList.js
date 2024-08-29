import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AssinaturasContext } from '../context/AssinaturasContext';

function AssinaturasList() {
  const { assinaturas } = useContext(AssinaturasContext);

  return (
    <div>
      <h2>Minhas Assinaturas</h2>
      <ul>
        {assinaturas.map(assinatura => (
          <li key={assinatura.id}>
            <Link to={`/assinaturas/${assinatura.id}`}>
              Plano: {assinatura.plano.nome}
              <br />
              Início: {assinatura.data_inicio}
              {/* Adicione outros detalhes relevantes, como data de cancelamento */}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AssinaturasList;