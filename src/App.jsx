import { BrowserRouter, Routes, Route } from 'react-router';

import HUB from './pages/HUB.jsx';
import OneToOne from './pages/OneToOne.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HUB />} />
        <Route path="/one-to-one" element={<OneToOne />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
