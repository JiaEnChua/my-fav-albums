import Date from './Date';
import Card from './Card';
import CardRight from './CardRight';

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
      <CardRight>
        <p>{item.artistName}</p>
        <strong>{item.collectionName}</strong>
        <Date>{item.releaseDate?.substring(0, 10)}</Date>
      </CardRight>
    </Card>
  );
};

export default Album;
