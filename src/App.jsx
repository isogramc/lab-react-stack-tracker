import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CompanyPage from "./pages/CompanyPage";
import TechnologyPage from "./pages/TechnologyPage";
import { Routes, Route } from 'react-router-dom';

import companiesData from './companies.json';
import technologiesData from './technologies.json';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route  path="/" element={ <HomePage companies={companiesData}/> } />
          <Route  path="/company/:companySlug" element={ <CompanyPage companies={companiesData}/> } />
          <Route  path="/tech/:slug" element={ <TechnologyPage technologies={technologiesData}/> } />
      </Routes>
    </div>
  );
}

export default App;
