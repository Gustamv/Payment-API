// PlanosContext.js
import { createContext, useState } from 'react';

const PlanosContext = createContext();

const PlanosProvider = ({ children }) => {
  const [planos, setPlanos] = useState([
    // Exemplo de dados de planos
    { id: 1, nome: 'Plano normalzinho', valor: 10.99 },
    { id: 2, nome: 'Plano mais legal', valor: 19.99 },
  ]);

  return (
    <PlanosContext.Provider value={{ planos, setPlanos }}>
      {children}
    </PlanosContext.Provider>
  );
};

export { PlanosProvider, PlanosContext };