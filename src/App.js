import './App.css';
import { CgMenuGridO } from 'react-icons/cg';
import { useDispatch } from 'react-redux';
import Navbar from './Components/Navbar';
import { toggleNav } from './redux/navbar/NavbarSlice';
import Hero from './Components/Hero';
import Search from './Components/Search';

function App() {
  const dispatch = useDispatch();

  return (
    <div className="App">
      <CgMenuGridO className="menu-icon" onClick={() => dispatch(toggleNav())} />
      <Navbar />
      <Hero />
      <Search />
    </div>
  );
}

export default App;
