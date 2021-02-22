import React, { useState, useEffect } from 'react';
import './App.css';
import Album from './components/Album/Album';
import axios from './shared/axios';
import NavBar from './components/NavBar/NavBar';
import { ituneEndpoint } from './shared/constant';
import { sortDesc } from './shared/utils';
import type { AlbumType } from './shared/type';

const App: React.FC = () => {
  const [albums, setAlbums] = useState<Array<AlbumType>>([]);
  useEffect(() => {
    axios
      .get(ituneEndpoint)
      .then((response) => {
        const resArray = response.data.results;
        const sortedArray = sortDesc(resArray);
        setAlbums(sortedArray);
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
