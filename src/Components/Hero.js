import '../style/Hero.css';
import HeroCarousel from './HeroCarousel';
import SearchModal from './SearchModal';

const Hero = () => (
  <div className="hero">
    <div className="down-box">
      <SearchModal />
      <HeroCarousel />
    </div>
  </div>
);

export default Hero;
