import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaUserAstronaut, FaShopify } from 'react-icons/fa6';
import { SiHomeadvisor } from 'react-icons/si';
import { MdOutlineCompare, MdQuiz } from 'react-icons/md';
import { BsReverseListColumnsReverse, BsNewspaper } from 'react-icons/bs';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { GiPodium } from 'react-icons/gi';
import { toggleNav } from '../redux/navbar/NavbarSlice';
import '../style/Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.nav);

  const navStyle = {
    transform: isOpen ? 'none' : 'translate(-16vw)',
    height: '100vh',
    width: '12vw',
    backgroundColor: 'rgb(95, 0, 0, 0.7)',
    position: 'fixed',
    transition: 'all 1s',
    zIndex: 101,
  };

  return (
    <div className="navbar" style={navStyle}>
      <div className="nav-wrapper">
        <div className="top-top">
          <div className="profile-container">
            <FaUserAstronaut className="user-image" />
          </div>
          <span className="username">USERNAME</span>
        </div>
        <div className="mid-mid">
          <Link to="/" onClick={() => dispatch(toggleNav())}>
            <div className="menu-item">
              <SiHomeadvisor className="menu-icons" />
              <span>HOME</span>
            </div>
          </Link>
          <Link to="/compare" onClick={() => dispatch(toggleNav())}>
            <div className="menu-item">
              <MdOutlineCompare className="menu-icons" />
              <span>COMPARE</span>
            </div>
          </Link>
          <Link to="/all-heroes" onClick={() => dispatch(toggleNav())}>
            <div className="menu-item">
              <BsReverseListColumnsReverse className="menu-icons" />
              <span>ALL HEROES</span>
            </div>
          </Link>
          <Link to="/#search" onClick={() => dispatch(toggleNav())}>
            <div className="menu-item">
              <AiOutlineFileSearch className="menu-icons" />
              <span>SEARCH</span>
            </div>
          </Link>
          <Link to="/ranks" onClick={() => dispatch(toggleNav())}>
            <div className="menu-item">
              <GiPodium className="menu-icons" />
              <span>HERO RANKS</span>
            </div>
          </Link>
          <div className="coming-soon push-up">
            Unlocking Soon...
            <div className="menu-item soon">
              <BsNewspaper className="menu-icons" />
              <span>NEWS</span>
            </div>
            <div className="menu-item soon">
              <FaShopify className="menu-icons" />
              <span>STORE</span>
            </div>
            <div className="menu-item soon">
              <MdQuiz className="menu-icons" />
              <span>QUIZ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
