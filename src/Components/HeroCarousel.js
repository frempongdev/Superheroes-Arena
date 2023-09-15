import { Link } from 'react-router-dom';
import '../style/HeroCarousel.css';

const HeroCarousel = () => (
  <div>
    <a href="#search">
      <button type="button" className="hero-button">
        <span />
        <span />
        <span />
        <span />
        Search Hero
      </button>
    </a>
    <Link to="/compare">
      <button type="button" className="hero-button">
        <span />
        <span />
        <span />
        <span />
        Compare Heroes
      </button>
    </Link>
    <Link to="/all-heroes">
      <button type="button" className="hero-button">
        <span />
        <span />
        <span />
        <span />
        All Heroes
      </button>
    </Link>
    <Link to="/ranks">
      <button type="button" className="hero-button">
        <span />
        <span />
        <span />
        <span />
        Hero Ranks
      </button>
    </Link>
  </div>
);

export default HeroCarousel;
