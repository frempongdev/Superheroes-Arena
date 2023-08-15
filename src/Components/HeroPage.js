import React, { useEffect } from 'react';
import '../style/HeroPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchHero } from '../redux/navbar/HeroSlice';

const HeroPage = () => {
  const dispatch = useDispatch();
  const { oneHeroId } = useParams();
  const { heroDetails } = useSelector((state) => state.fetchHero);

  useEffect(() => {
    dispatch(fetchHero(oneHeroId));
  }, [dispatch]);

  return (
    <div className="hero-page-wrapper">
      <h1 className="hero-name">{heroDetails?.name}</h1>
      <img src={heroDetails?.images?.md} alt="hero-pic" />
    </div>
  );
};

export default HeroPage;
