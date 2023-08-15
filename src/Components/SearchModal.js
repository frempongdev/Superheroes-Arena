import { useDispatch, useSelector } from 'react-redux';
import '../style/SearchModal.css';
import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { clearSearch } from '../redux/navbar/SearchSlice';

const SearchModal = () => {
  const { searched } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  const handleCloseSearch = () => {
    dispatch(clearSearch());
  };

  return (
    <div className="modal-overlay">
      <div className="sea">
        <div className="results">
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
      </div>
      <IoMdCloseCircle className="close-search" onClick={handleCloseSearch} />
    </div>
  );
};

export default SearchModal;
