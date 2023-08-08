import { useSelector } from 'react-redux';
import '../style/Navbar.css';

const Navbar = () => {
  const { isOpen } = useSelector((state) => state.nav);

  const navStyle = {
    transform: isOpen ? 'none' : 'translate(-305px)',
    height: '99vh',
    width: '16%',
    backgroundColor: 'rgb(62, 62, 62)',
    position: 'fixed',
    transition: 'all 1s',
  };

  return (
    <div className="navbar" style={navStyle}>
      <div className="menu-icon-box">
        <div className="top">SUPERHEROES MENU</div>
      </div>
    </div>
  );
};

export default Navbar;
