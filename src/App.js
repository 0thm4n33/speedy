import './App.css';
import Layout from './pages/layout';
import React from 'react';
import AcceuillPage from './pages/accueill';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import RentPage from './pages/rent';
import DetailCar from './pages/detailCar';
import Service from './services/service';
import AuthenticationPage from './pages/authentication';
import AdminPanel from './pages/panel';
import ScrollToTop from './components/scrollToTop';
export const ReservationContext = React.createContext();
const service = new Service();
function App() {
  return (
        <ReservationContext.Provider value={service}>
           <Router>
              <Layout>
                  <ScrollToTop />
                  <Routes>
                    <Route path='/' element={<AcceuillPage/>} />
                    <Route path='/rent/:type' element={<RentPage />} />
                    <Route path='/cars/:type/:id' element={<DetailCar />} />
                    <Route path='/admin/authentication' element={<AuthenticationPage />} />
                    <Route path='admin/panel' element={<AdminPanel />} />
                  </Routes>
              </Layout>
          </Router>
        </ReservationContext.Provider>
  );
}

export default App;
