import '../style/Search.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { searchHero } from '../redux/navbar/SearchSlice';

const Search = () => {
  const [inputValue, setInputValue] = useState('');

  const dispatch = useDispatch();

  const handleInputSubmit = (e) => {
    e.preventDefault();
    dispatch(searchHero(inputValue));
  };

  return (
    <div className="main" id="search">
      <form className="search-box">
        <input type="text" className="input" placeholder="Search your SuperHero..." value={inputValue} onChange={(e) => { setInputValue(e.target.value); }} />
        <input type="submit" className="submit" onClick={handleInputSubmit} />
      </form>
    </div>
  );
};

export default Search;
