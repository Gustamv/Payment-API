// src/components/PagamentoSucesso.js
import React from 'react';

const PagamentoSucesso = () => {
  return (
    <div className="payment-confirmed-container">
      <h2 className="payment-confirmed-heading">Pagamento Realizado com Sucesso!</h2>
      <p className="payment-confirmed-message">
        Obrigado por realizar o pagamento. Você receberá um e-mail de confirmação em breve.
      </p>
    </div>
  );
};

export default PagamentoSucesso;