import React from 'react';
import { IoCaretForwardOutline, IoCaretBackOutline } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearFetch } from '../../redux/navbar/HeroSlice';

const OtherInfo = () => {
  const { heroDetails } = useSelector((state) => state.fetchHero);
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleClearFetch = () => {
    history(-1);
    dispatch(clearFetch());
  };

  return (
    <div className="ot-wrapper">
      <div className="details-down">
        <div className="small-detail-box">
          <span className="small-detail-left">Full Name: </span>
          <span className="small-detail-right">
            {heroDetails?.biography?.fullName}
          </span>
        </div>
        <div className="small-detail-box">
          <span className="small-detail-left">Aliases: </span>
          <span className="small-detail-right">
            {heroDetails?.biography?.aliases.join(', ')}
          </span>
        </div>
        <div className="small-detail-box">
          <span className="small-detail-left">Birth Place: </span>
          <span className="small-detail-right">
            {heroDetails?.biography?.placeOfBirth}
          </span>
        </div>
      </div>
      <h3 className="section-title">Appearance</h3>
      <div className="details-down">
        <div className="small-detail-box">
          <span className="small-detail-left">Gender: </span>
          <span className="small-detail-right">
            {heroDetails?.appearance?.gender}
          </span>
        </div>
        <div className="small-detail-box">
          <span className="small-detail-left">Race: </span>
          <span className="small-detail-right">
            {heroDetails?.appearance?.race}
          </span>
        </div>
        <div className="small-detail-box">
          <span className="small-detail-left">Height: </span>
          <span className="small-detail-right">
            {heroDetails?.appearance?.height[0]}
          </span>
        </div>
        <div className="small-detail-box">
          <span className="small-detail-left">Weight: </span>
          <span className="small-detail-right">
            {heroDetails?.appearance?.weight}
          </span>
        </div>
        <div className="small-detail-box">
          <span className="small-detail-left">Eye Color: </span>
          <span className="small-detail-right">
            {heroDetails?.appearance?.eyeColor}
          </span>
        </div>
        <div className="small-detail-box">
          <span className="small-detail-left">Hair Color: </span>
          <span className="small-detail-right">
            {heroDetails?.appearance?.hairColor}
          </span>
        </div>
        <h3 className="section-title">Connections</h3>
        <div className="small-detail-box">
          <span className="small-detail-left">Occupation: </span>
          <span className="small-detail-right">
            {heroDetails?.work?.occupation}
          </span>
        </div>
        <div className="small-detail-box">
          <span className="small-detail-left">Base: </span>
          <span className="small-detail-right">
            {heroDetails?.work?.base}
          </span>
        </div>
        <div className="small-detail-box">
          <span className="small-detail-left">Affiliations: </span>
          <span className="small-detail-right">
            {heroDetails?.connections?.groupAffiliation}
          </span>
        </div>
        <div className="small-detail-box">
          <span className="small-detail-left">Relatives: </span>
          <span className="small-detail-right">
            {heroDetails?.connections?.relatives}
          </span>
        </div>
        <h3 className="section-title">Publication</h3>
        <div className="small-detail-box">
          <span className="small-detail-left">Publisher: </span>
          <span className="small-detail-right">
            {heroDetails?.biography?.publisher}
          </span>
        </div>
        <div className="small-detail-box">
          <span className="small-detail-left">First Appearance: </span>
          <span className="small-detail-right">
            {heroDetails?.biography?.firstAppearance}
          </span>
        </div>
      </div>
      <div className="wiki-box">
        <a href={`https://en.wikipedia.org/wiki/${heroDetails.name}`} className="wiki-link bk-box bbr" target="_blank" rel="noopener noreferrer">
          <span className="bk-to-srch">Read More</span>
          <IoCaretForwardOutline className="bk-btn" />
        </a>
      </div>
      <button type="button" className="bk-box btn-left" onClick={() => handleClearFetch()}>
        <IoCaretBackOutline className="bk-btn" />
        <span className="bk-to-srch">Back</span>
      </button>
    </div>
  );
};

export default OtherInfo;
