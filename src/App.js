import './App.css';
import Layout from './pages/layout';
import React from 'react';
import AcceuillPage from './pages/accueill';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import RentPage from './pages/rent';

function App() {
  return (
        <Router>
          <Layout>
              <Routes>
                <Route path='/' element={<AcceuillPage/>} />
                <Route path='/rent/:type' element={<RentPage />} />
              </Routes>
          </Layout>
        </Router>
  );
}

export default App;
