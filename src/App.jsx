import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';
import Home from './components/pages/Home';
import TitleUpdater from './components/common/TitleUpdater';

function App() {
  return (
    <LanguageProvider>
      <TitleUpdater />
      <div className="app">
        <Header />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
