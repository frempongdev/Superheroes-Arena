import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchHero } from '../redux/navbar/SearchSlice';
import '../style/AllHeroes.css';

const AllHeroes = () => {
  const { searched } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(searchHero(''));
  }, [dispatch]);

  return (
    <div className="all-heroes-wrapper">
      {
            searched.map((oneHero) => (
              <Link to={`/hero/${oneHero.id}`} key={oneHero.id} className="hero-link">
                <div className="hero-box">
                  <div className="hero-desc" style={{ backgroundImage: `url(${oneHero.images.sm})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <p>{oneHero.name}</p>
                    <span>&#9733;</span>
                    <span>{Math.floor(Math.random() * 6)}</span>
                  </div>
                </div>
              </Link>
            ))
        }
    </div>
  );
};

export default AllHeroes;
