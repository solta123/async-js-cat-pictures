import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Breeds } from './pages/Breeds';
import { DogGallery } from './pages/DogGallery';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Cat Pictures</h1>
          <nav className="navbar">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              Home
            </NavLink>
            <NavLink to="/breeds" className={({ isActive }) => (isActive ? 'active' : '')}>
              Breeds
            </NavLink>
            <NavLink to="/dog-gallery" className={({ isActive }) => (isActive ? 'active' : '')}>
              Dog Gallery
            </NavLink>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/breeds" element={<Breeds />} />
            <Route path="/dog-gallery" element={<DogGallery />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;