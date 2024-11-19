import React, { useEffect, useState } from 'react';
import axios from 'axios';

const RickAndMortyApi = () => {
  const [dataType, setDataType] = useState('character'); 
  const [items, setItems] = useState([]); 

  useEffect(() => {
    
    axios
      .get(`https://rickandmortyapi.com/api/${dataType}`)
      .then((response) => {
        setItems(response.data.results || []);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [dataType]); 

  return (
    <div>
      <h1>Rick and Morty {dataType.charAt(0).toUpperCase() + dataType.slice(1)}</h1>
      
      <label htmlFor="dataType">Choose Category:</label>
      <select
        id="dataType"
        value={dataType}
        onChange={(e) => setDataType(e.target.value)}
        >
        <option value="character">Characters</option>
        <option value="episode">Episodes</option>
        <option value="location">Locations</option>
      </select>

      
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            ID: {item.id}, Name: {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RickAndMortyApi;
