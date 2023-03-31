import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import GamePanel from '../components/GamePanel';

function Search() {
  const [ result, setResult ] = useState(null);

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    console.log("./api/" + searchParams.get("query"));
    fetch("./api/" + searchParams.get("query"))
      .then((res) =>
        res.json()
      )
      .then(data => {
        console.log("hi" + data);
        setResult(data);
      })
      .catch((res) => {
        console.log("error");
        res.json();
        setResult(res);
      })
  }, [location]);

  return (
    <div>
      {result ? 
        result.map(game => <GamePanel game = {game} />) : 
        <p>Loading...</p>}
    </div>
  );
}

export default Search;