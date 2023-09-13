import React, { useState } from 'react';
import '../style/Compare.css';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineDeleteForever } from 'react-icons/md';
import { clearSearch, searchHero } from '../redux/navbar/SearchSlice';
import PowerStats from './HeroPage/PowerStats';

const Compare = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');
  const [compareArray, setCompareArray] = useState([]);

  const { searched } = useSelector((state) => state.search);

  const handldeInputChange = (e) => {
    setInputValue(e.target.value);
    dispatch(searchHero(e.target.value));
  };

  const handleLineClicked = (hero) => {
    const newCompareArray = [...compareArray, hero];
    setCompareArray(newCompareArray);
    setInputValue('');
    dispatch(clearSearch());
  };

  const handleHeroRemove = (index) => {
    const newCompareArray = [...compareArray];
    newCompareArray.splice(index, 1);
    setCompareArray(newCompareArray);
  };

  return (
    <div className="compare-wrapper">
      <h1>Compare Heroes</h1>
      <div className="compare-box">
        <div className="single-Hero">
          {compareArray.length < 3 && (<input type="text" className="srch-bx" placeholder="Enter a Hero to compare" value={inputValue} onChange={(e) => handldeInputChange(e)} />)}
          {inputValue.length > 0 && (
          <div className="results-box">
            {
            searched.map((oneHero) => (
              // eslint-disable-next-line max-len
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
              <div className="hero-line" key={oneHero.id} onClick={() => handleLineClicked(oneHero)}>
                <img src={oneHero.images.sm} alt="hero-thumb" className="hero-thumb" />
                <p>{oneHero.name}</p>
              </div>
            ))
            }
          </div>
          )}
        </div>
        <div className="heroDisplay">
          {compareArray.map((comparedHero, hIndx) => (
            <div className="cHero-box" key={comparedHero.id}>
              <div className="top-compare">
                <h2 className="hName">{comparedHero.name}</h2>
                <MdOutlineDeleteForever className="delete-hero" onClick={() => handleHeroRemove(hIndx)} />
              </div>
              {compareArray.length > 2 ? (
                <div className="down-compare">
                  <img src={comparedHero.images.lg} alt="" className="comp-img" />
                  <PowerStats heroDetails={comparedHero} />
                </div>
              ) : (
                <div className="down-compare flexx">
                  {hIndx === 1 ? (
                    <>
                      <PowerStats heroDetails={comparedHero} />
                      <img src={comparedHero.images.lg} alt="" className="comp-img" />
                    </>
                  ) : (
                    <>
                      <img src={comparedHero.images.lg} alt="" className="comp-img" />
                      <PowerStats heroDetails={comparedHero} />
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Compare;
