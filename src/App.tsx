import { Routes, Route } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import HomePage from './pages/HomePage';
function App() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route path="" element={<HomePage />} />
      </Route>
    </Routes>
  );
}

export default App;
