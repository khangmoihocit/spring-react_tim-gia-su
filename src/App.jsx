import React from 'react';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import AppRoutes from './routes/AppRoutes';
import './assets/styles/variables.css'; // Ensure CSS variables are loaded

const App = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <div className="flex-grow-1" style={{ paddingTop: '70px' }}> {/* Offset cho fixed navbar */}
        <AppRoutes />
      </div>
      <Footer />
    </div>
  );
};

export default App;