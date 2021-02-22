import Date from '../Date';
import Card from '../Card';
import type { AlbumType } from '../../shared/type';

type AlbumProps = {
  item?: AlbumType;
};

const Album: React.FC<AlbumProps> = ({ item }) => {
  return (
    <Card>
      <img src={item?.artworkUrl100} alt='album_artWork' />
      <div style={{ marginLeft: '20px' }}>
        <p>{item?.artistName}</p>
        <strong>{item?.collectionName}</strong>
        <Date>{item?.releaseDate?.substring(0, 10)}</Date>
      </div>
    </Card>
  );
};

export default Album;
