import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AssinaturasContext } from '../context/AssinaturasContext';

function AssinaturaDetails() {
  const { assinaturas } = useContext(AssinaturasContext);
  const { id } = useParams();
  const assinatura = assinaturas.find(a => a.id === parseInt(id));

  return (
    <div>
      <h2>Detalhes da Assinatura</h2>
      {/* Renderizar os detalhes da assinatura */}
      <p>Plano: {assinatura.plano.nome}</p>
      <p>Início: {assinatura.data_inicio}</p>
      <p>Fim: {assinatura.data_cancelamento || 'Ativa'}</p>
      {/* Adicione outros detalhes, como valor, métodos de pagamento, etc. */}
    </div>
  );
}

export default AssinaturaDetails;