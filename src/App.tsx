import {
  HashRouter,
  Route,
  Routes
} from "react-router-dom";
import './App.css';
import Layout from './pages/LayoutPage/LayoutPage';
import PraxisPage from './pages/PraxisPage/PraxisPage';
import TeamPage from './pages/TeamPage/TeamPage';
import ServicesPage from './pages/ServicesPage/ServicesPage';
import LinksPage from './pages/LinksPage/LinksPage';
import EmergenciesPage from './pages/EmergenciesPage/EmergenciesPage';
import AboutPage from './pages/AboutPage/AboutPage';
import ContactPage from './pages/ContactPage/ContactPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PraxisPage />} />
          <Route path="team" element={<TeamPage />} />
          <Route path="leistungen" element={<ServicesPage />} />
          <Route path="links" element={<LinksPage />} />
          <Route path="notfalle" element={<EmergenciesPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
