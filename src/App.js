import './App.css';
import { CgMenuGridO } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { toggleNav } from './redux/navbar/NavbarSlice';
import Hero from './Components/Hero';
import HeroPage from './Components/HeroPage';
import AllHeroes from './Components/AllHeroes';
import Compare from './Components/Compare';
import Ranks from './Components/Ranks';

function App() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="App">
        <CgMenuGridO className="menu-icon" onClick={() => dispatch(toggleNav())} />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Hero />} />
          <Route path="/all-heroes" exact element={<AllHeroes />} />
          <Route path="/ranks" exact element={<Ranks />} />
          <Route path="/compare" exact element={<Compare />} />
          <Route path="/hero/:oneHeroId" exact element={<HeroPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
