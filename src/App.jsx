import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

import Home from './pages/home.jsx';
import GalleryPage from './components/GalleryPage.jsx';

import { galleries } from './siteData.js';

function App() {
  return (
    <BrowserRouter basename="/Cost-Cutters-Website/">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/galleries/decks"
          element={<GalleryPage {...galleries.decks} />}
        />

        <Route
          path="/galleries/bathrooms"
          element={<GalleryPage {...galleries.bathrooms} />}
        />

        <Route
          path="/galleries/remodeling"
          element={<GalleryPage {...galleries.remodeling} />}
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;