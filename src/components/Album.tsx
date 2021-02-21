import './Album.css';
import React from 'react';

interface AlbumProps {
  item: {
    artworkUrl100: string;
    releaseDate: string;
    artistName: string;
    collectionName: string;
    collectionId: string;
  };
}

const Album: React.FC<AlbumProps> = ({ item }) => {
  return (
    <div className='album_list'>
      <div className='album_list_left'>
        <img src={item.artworkUrl100} alt='album_artWork' />
      </div>
      <div className='album_list_right'>
        <p>{item.artistName}</p>
        <strong>{item.collectionName}</strong>
        <p className='album_list_right_date'>
          {item.releaseDate?.substring(0, 10)}
        </p>
      </div>
    </div>
  );
};

export default Album;
