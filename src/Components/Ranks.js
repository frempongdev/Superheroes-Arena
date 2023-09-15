import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/Ranks.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllHeroes } from '../redux/navbar/SearchSlice';
import { clearFetch } from '../redux/navbar/HeroSlice';

const Ranks = () => {
  const newB = 'Hero Ranks';

  const terms = ['TotalStats', 'Intelligence', 'Strength', 'Speed', 'Durability', 'Power', 'Combat'];
  const [filterTerm, setFilterTerm] = useState(localStorage.getItem('term') || 'TotalStats');

  const { allHeroes } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllHeroes());
  }, [dispatch]);

  useEffect(() => {
    const handleScroll = () => {
      localStorage.setItem('scrollPosition', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    localStorage.setItem('term', filterTerm);
  }, [filterTerm]);

  const handleTermSelected = (e) => {
    setFilterTerm(e.target.value);
  };

  return (
    <div className="ranks-wrapper">
      <div className="top-nav">
        <h1>{newB}</h1>
        <div className="rank-by">
          <span>Rank by</span>
          <select value={filterTerm} name="terms" id="terms" onChange={handleTermSelected} className="term-selector">
            {terms.map((tm) => (
              <option key={tm} value={tm}>{tm}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="all-heroes-wrapper ">
        {
  allHeroes
    .map((oneHero) => {
      // Calculate the total powerstats for each hero
      const totalStats = Object.values(oneHero.powerstats).reduce((a, b) => a + b);

      const newHero = { ...oneHero, totalStats };

      return newHero;
    })
    .sort((a, b) => {
      if (filterTerm === 'TotalStats') {
        return b.totalStats - a.totalStats;
      }
      return b.powerstats[filterTerm.toLowerCase()] - a.powerstats[filterTerm.toLowerCase()];
    })
    .map((sortedHero, indx) => (
      <Link to={`/hero/${sortedHero.id}`} key={sortedHero.id} className="hero-link" onClick={dispatch(clearFetch())}>
        <div className="hero-box">
          <div className="hero-desc" style={{ backgroundImage: `url(${sortedHero.images.sm})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
            <p>{sortedHero.name}</p>
            <span className="rank-txt">Rank</span>
            <span>{indx + 1}</span>
          </div>
        </div>
      </Link>
    ))
}

      </div>

    </div>
  );
};

export default Ranks;
