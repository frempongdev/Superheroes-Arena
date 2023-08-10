import { useSelector } from 'react-redux';
import '../style/SearchModal.css';
import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

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
                <div className="hero-desc" style={{ backgroundImage: `url(${oneHero.images.sm})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                  <p>{oneHero.name}</p>
                  <span>&#9733;</span>
                  <span>{Math.floor(Math.random() * 6)}</span>
                </div>
              </div>
            ))
            }
          </div>
        </div>
        <IoMdCloseCircle className="close-search" onClick={() => { searched.length = 0; }} />
      </div>

      )}
    </>

  );
};

export default SearchModal;
