import { HomePage,ClientAccount,ClientDashboard,Service,About, } from './pages/client-pages/clientPagesImport';
import Navigation from './components/template-parts/Navigation';

import { Route,Routes } from 'react-router';
import './App.css'

function App() {

  return(
    <>
  <Navigation />

  <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<About />} />
  <Route path="/service" element={<Service />} />
   <Route path="/client/account" element={<ClientAccount />} />
  <Route path="/client/dashboard" element={<ClientDashboard />} />


  </Routes>
  </>
  );


}

export default App;
