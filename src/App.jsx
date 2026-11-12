import { BrowserRouter, Routes, Route } from 'react-router';

import HUB from './pages/HUB.jsx';
import OneToOne from './pages/OneToOne.jsx';
import PKZLab from './pages/PKZLab.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HUB />} />
        <Route path="/one-to-one" element={<OneToOne />} />
        <Route path="/pkz-lab" element={<PKZLab />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
