import { useSelector } from 'react-redux';
import '../style/Hero.css';
import HeroCarousel from './HeroCarousel';
import Search from './Search';
import SearchModal from './SearchModal';

const Hero = () => {
  const { searched } = useSelector((state) => state.search);

  return (
    <div className="hero">
      <div className="down-box">
        {searched.length !== 0 && <SearchModal />}
        <HeroCarousel />
        <Search />
      </div>
    </div>
  );
};

export default Hero;
