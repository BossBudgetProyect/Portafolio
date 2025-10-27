import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SemestreI_II from './pages/SemestreI_II';
import SemestreIII from './pages/SemestreIII';
import SemestreIV from './pages/SemestreIV';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/semestre-i-ii" element={<SemestreI_II />} />
        <Route path="/semestre-iii" element={<SemestreIII />} />
        <Route path="/semestre-iv" element={<SemestreIV />} />
      </Routes>
    </Router>
  );
}

export default App;