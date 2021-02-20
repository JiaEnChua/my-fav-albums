import { useState, useEffect } from 'react';
import './App.css';
import axios from './axios';

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
    const fetchApi = async () => {
      await axios
        .get('/')
        .then((response) => {
          console.log(response);
          setAlbums(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    fetchApi();
  }, []);

  return (
    <div className='app'>
      <h1>My Favorite Albums</h1>
      <div className='album_list'>
        {albums?.map(
          (item) =>
            item.collectionName && (
              <div className='album_list_entity' key={item.collectionId}>
                <div className='album_list_entity_left'>
                  <img src={item.artworkUrl100} />
                </div>
                <div className='album_list_entity_right'>
                  <p>{item.artistName}</p>
                  <p>{item.collectionName}</p>
                  <p>{item.releaseDate?.substring(0, 10)}</p>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default App;
