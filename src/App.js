import React from 'react';
import Header from './layout/Header';
import Footer from './layout/Footer';
import Home from './components/pages/Home';

function App() {
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
