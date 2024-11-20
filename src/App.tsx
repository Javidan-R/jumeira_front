import React from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

// Import pages
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/product",
      element: <ProductPage />,
    },
    {
      path: "/about",
      element: <AboutPage />,
    },
    {

      path: "*",
      element: <NotFoundPage />,
    },
  ]);
  return routes;
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <AppRoutes /> {/* Routing logic is handled here */}
      </div>
    </Router>
  );
};

export default App;
