import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'components/Routes';
import Footer from 'components/footer';
import Header from 'components/header';

function App() {
  return (
    <main className="app-main">
      <div className="app-content">
        <Router>
          <Header />
          <Routes />
          <Footer />
          {/* <Call /> */}
        </Router>
      </div>
    </main>
  );
}

export default App;
