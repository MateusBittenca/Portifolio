import React, { useEffect } from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/pages/Home';

function App() {
  useEffect(() => {
    // Alterar o título da página
    document.title = 'Mateus Bittencourt - Portfolio | Fullstack Developer';
    
    // Alterar o favicon se quiser (opcional)
    // const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    // link.type = 'image/x-icon';
    // link.rel = 'shortcut icon';
    // link.href = '/favicon.ico';
    // document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return (
    <div className="app">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
