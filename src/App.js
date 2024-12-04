import Pages from './pages/Pages';
import Cuisine from './pages/Cuisine';
import Category from './components/Category';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Category />
      <Routes>
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
      <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
