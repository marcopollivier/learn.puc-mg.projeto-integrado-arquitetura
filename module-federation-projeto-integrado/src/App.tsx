// src/App.tsx (projeto principal)
import React, { useEffect } from "react";

const App: React.FC = () => {
  useEffect(() => {
    const loadMicrofrontend = async () => {
      const { Button } = window.microfrontendProjetoIntegradoMain
      // Agora você pode usar o componente Button do microfrontend
    };

    loadMicrofrontend();
  }, []);

  return (
    <div>
      <h1>Projeto Principal</h1>
      {/* Renderize o componente do microfrontend aqui */}
    </div>
  );
};

export default App;
