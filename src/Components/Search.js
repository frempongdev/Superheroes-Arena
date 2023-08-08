import '../style/Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { searchHero } from '../redux/navbar/SearchSlice';

const Search = () => {
  const [inputValue, setInputValue] = useState(''); // use state hook to store input value

  const { searched } = useSelector((state) => state.search);

  const dispatch = useDispatch();

  const handleInputSubmit = (e) => {
    e.preventDefault();
    dispatch(searchHero(inputValue)); // dispatch searchHero with input value
  };

  return (
    <div className="main" id="search">
      <form className="search-box">
        <input type="text" className="input" placeholder="Search your SuperHero..." value={inputValue} onChange={(e) => { setInputValue(e.target.value); }} />
        <input type="submit" className="submit" onClick={handleInputSubmit} />
      </form>
      <div className="results">
        {
          searched.map((oneHero) => (
            <div key={oneHero.id}>
              <p>{oneHero.name}</p>
              <img src={oneHero.images.xs} alt="hero-pic" />
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Search;
