import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoCaretBackOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import { clearFetch } from '../../redux/navbar/HeroSlice';

const PersonalDetails = () => {
  const { heroDetails } = useSelector((state) => state.fetchHero);
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleClearFetch = () => {
    dispatch(clearFetch());
    history(-1);
  };

  return (
    <div className="pd-wrapper">
      {heroDetails?.images?.lg ? <img src={heroDetails?.images?.lg} alt="hero-pic" className="hero-pic" /> : <div className="lds-circle"><div /></div>}
      <h1 className="hero-name">{heroDetails?.name}</h1>
      <button type="button" className="bk-box" onClick={() => handleClearFetch()}>
        <IoCaretBackOutline className="bk-btn" />
        <span className="bk-to-srch">Back</span>
      </button>
    </div>
  );
};

export default PersonalDetails;
