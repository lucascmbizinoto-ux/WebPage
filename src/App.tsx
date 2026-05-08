import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import SinglePostTemplatePage from './pages/SinglePostTemplatePage/SinglePostTemplatePage';

function AppRoutes() {
  const location = useLocation();

  return (
    <Routes key={location.pathname}>
      <Route path="/" element={<HomePage />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/post/post/:post_id" element={<SinglePostTemplatePage />} />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <AppRoutes />
      </div>
    </Router>
  );
}

export default App;
