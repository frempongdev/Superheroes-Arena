import '../style/Search.css';
import { useDispatch } from 'react-redux';
import { useState } from 'react'; // import useState hook
import { searchHero } from '../redux/navbar/SearchSlice';

const Search = () => {
  const [inputValue, setInputValue] = useState(''); // use state hook to store input value
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value); // update input value in state
    dispatch(searchHero(e.target.value)); // dispatch searchHero with input value
  };

  return (
    <div className="main">
      <div className="search-box">
        <input type="text" className="input" placeholder="Search your SuperHero..." value={inputValue} onChange={handleInputChange} />
      </div>
      <div className="results">No</div>
    </div>
  );
};

export default Search;
