// AssinaturasContext.js
import { createContext, useState } from 'react';

const AssinaturasContext = createContext();

const AssinaturasProvider = ({ children }) => {
  const [assinaturas, setAssinaturas] = useState([
    // Exemplo de dados de assinaturas
    { id: 1, plano: { nome: 'Plano 1' }, data_inicio: '2022-01-01' },
    { id: 2, plano: { nome: 'Plano 2' }, data_inicio: '2022-02-01' },
  ]);

  return (
    <AssinaturasContext.Provider value={{ assinaturas, setAssinaturas }}>
      {children}
    </AssinaturasContext.Provider>
  );
};

export { AssinaturasProvider, AssinaturasContext };