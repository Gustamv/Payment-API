// src/components/FormularioPagamento.js
import React, { useState } from 'react';
import '../styles/FormularioPagamento.css';
import { makePayment } from '../services/api';
import PagamentoSucesso from './PagamentoSucesso';

const FormularioPagamento = () => {
  const [amount, setAmount] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvc, setCvc] = useState('');
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const paymentData = { amount, cardNumber, expiryDate, cvc };
    try {
      const response = await makePayment(paymentData);
      if (response.status === 200) {
        setPaymentConfirmed(true);
      } else {
        console.error('Erro ao processar pagamento:', response);
      }
    } catch (error) {
      console.error('Erro ao processar pagamento:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      {paymentConfirmed ? (
        <PagamentoSucesso />
      ) : (
        <div>
          <h2 className="form-heading">Formulário de Pagamento</h2>
          <input
            type="text"
            placeholder="Número do Cartão"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="Data de Validade"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            className="form-input"
          />
          <input
            type="text"
            placeholder="CVC"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            className="form-input"
          />
          <input
            type="number"
            placeholder="Valor"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="form-input"
          />
          <button type="submit" className="form-button">Pagar</button>
        </div>
      )}
    </form>
  );
};

export default FormularioPagamento;