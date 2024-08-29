import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FormularioPagamento from './components/FormularioPagamento';
import PlanosList from './components/PlanosList';
import PlanoDetails from './components/PlanoDetails';
import AssinaturasList from './components/AssinaturasList';
import AssinaturaDetails from './components/AssinaturasDetails';
import { PlanosProvider } from './context/PlanosContext';
import { AssinaturasProvider } from './context/AssinaturasContext';

function App() {
  return (
    <PlanosProvider>
      <AssinaturasProvider>
        <Router>
          <div>
            <Navbar />
            <Routes>
              <Route path="/" element={<PlanosList />} />
              <Route path="/planos/:id" element={<PlanoDetails />} />
              <Route path="/assinaturas" element={<AssinaturasList />} />
              <Route path="/assinaturas/:id" element={<AssinaturaDetails />} />
              <Route path="/pagamento" element={<FormularioPagamento />} />
              <Route path="/sobre" element={<h2>Sobre </h2>} />
            </Routes>
          </div>
        </Router>
      </AssinaturasProvider>
    </PlanosProvider>
  );
}

export default App;