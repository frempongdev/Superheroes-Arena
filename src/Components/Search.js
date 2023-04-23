import { useState } from 'react';
import '../style/Search.css';

const Search = () => {
  const [input, setInput] = useState('');

  return (
    <div className="main">
      <div className="search-box">
        <input type="text" className="input" placeholder="Search your SuperHero..." value={input} onChange={(e) => setInput(e.target.value)} />

      </div>
      <div className="results">{input}</div>
    </div>
  );
};

export default Search;
