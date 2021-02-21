import React, { useState, useEffect } from 'react';
import './App.css';
import axios from './axios';
import Album from './components/Album';

interface Albums {
  artworkUrl100: string;
  releaseDate: string;
  artistName: string;
  collectionName: string;
  collectionId: string;
}

const App: React.FC = () => {
  const [albums, setAlbums] = useState<Array<Albums>>([]);
  useEffect(() => {
    try {
      const fetchApi = async () => {
        const response = await axios.get('/');
        setAlbums(response.data);
      };
      fetchApi();
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <div className='app'>
      <h1>My Favorite Albums</h1>
      {albums?.map(
        (item) =>
          item.collectionName && <Album item={item} key={item.collectionId} />
      )}
    </div>
  );
};

export default App;
