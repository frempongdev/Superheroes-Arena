import React, { useEffect } from 'react';
import '../style/HeroPage.css';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchHero } from '../redux/navbar/HeroSlice';
import PersonalDetails from './HeroPage/PersonalDetails';
import OtherInfo from './HeroPage/OtherInfo';
import PowerStats from './HeroPage/PowerStats';

const HeroPage = () => {
  const dispatch = useDispatch();
  const { oneHeroId } = useParams();
  const { heroDetails } = useSelector((state) => state.fetchHero);

  useEffect(() => {
    dispatch(fetchHero(oneHeroId));
  }, [dispatch]);

  return (
    <div className="hero-page-wrapper">
      <div className="personal-detailis">
        <PersonalDetails />
      </div>
      <div className="other-info">
        <PowerStats heroDetails={heroDetails} />
      </div>
      <div className="power-side">
        <OtherInfo />
      </div>
    </div>
  );
};

export default HeroPage;
