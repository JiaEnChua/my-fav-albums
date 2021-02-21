import Date from './Date';
import Card from './Card';

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
    <Card>
      <img src={item.artworkUrl100} alt='album_artWork' />
      <div style={{ marginLeft: '20px' }}>
        <p>{item.artistName}</p>
        <strong>{item.collectionName}</strong>
        <Date>{item.releaseDate?.substring(0, 10)}</Date>
      </div>
    </Card>
  );
};

export default Album;
