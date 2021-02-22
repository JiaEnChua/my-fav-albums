import React, { useState, useEffect } from 'react';
import './App.css';
import Album from './components/Album';
import fetchApi from './api';
import NavBar from './components/NavBar';

type State = {
  artworkUrl100: string;
  releaseDate: string;
  artistName: string;
  collectionName: string;
  collectionId: string;
};

const App: React.FC = () => {
  const [albums, setAlbums] = useState<Array<State>>([]);
  useEffect(() => {
    fetchApi()
      .then((response) => {
        setAlbums(response.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <div className='app'>
      <NavBar />
      {albums?.map(
        (item) =>
          item.collectionName && <Album item={item} key={item.collectionId} />
      )}
    </div>
  );
};

export default App;
