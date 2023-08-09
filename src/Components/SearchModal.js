import { useSelector } from 'react-redux';
import '../style/SearchModal.css';
import React from 'react';

const SearchModal = () => {
  const { searched } = useSelector((state) => state.search);

  return (
    <>
      {searched.length !== 0 && (

      <div className="modal-overlay">
        <div className="sea">
          <div className="results">
            {
            searched.map((oneHero) => (
              <div className="hero-box" key={oneHero.id}>
                <img src={oneHero.images.xs} alt="hero-pic" />
                <div className="hero-desc">
                  <p>{oneHero.name}</p>
                  <span>&#9733;</span>
                  <span>{Math.floor(Math.random() * 6)}</span>
                </div>
              </div>
            ))
            }
          </div>
        </div>

      </div>

      )}
    </>

  );
};

export default SearchModal;
