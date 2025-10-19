import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { Breeds } from './pages/Breeds';
import { DogGallery } from './pages/DogGallery';

const navItems = [
  { path: '/', label: 'Home', element: <Home /> },
  { path: '/breeds', label: 'Breeds', element: <Breeds /> },
  { path: '/dog-gallery', label: 'Dog Gallery', element: <DogGallery /> },
];

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Cat Pictures</h1>
          <nav className="navbar">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => (isActive ? 'active' : '')}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </header>
        <main>
          <Routes>
            {navItems.map((item) => (
              <Route key={item.path} path={item.path} element={item.element} />
            ))}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;