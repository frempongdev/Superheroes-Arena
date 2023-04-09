import { useSelector } from 'react-redux';
import '../style/Navbar.css';

const Navbar = () => {
  const { isOpen } = useSelector((state) => state.nav);

  const navStyle = {
    transform: isOpen ? 'none' : 'translate(-190px)',
    height: '99vh',
    width: '15%',
    backgroundColor: 'rgb(62, 62, 62)',
    transition: 'all 1s',
  };

  return (
    <div className="navbar" style={navStyle}>
      <div className="menu-icon-box">
        NavBar
      </div>
    </div>
  );
};

export default Navbar;
