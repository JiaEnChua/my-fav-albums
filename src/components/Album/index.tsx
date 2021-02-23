import type { AlbumType } from '../../shared/type';
import styled from 'styled-components';

type AlbumProps = {
  item?: AlbumType;
};

const Card = styled.div`
  display: flex;
  box-shadow: 10px 5px 5px lightgray;
  margin: 50px 0;
  width: 70vw;
  height: 100px;
  min-height: fit-content;
  overflow: auto;
`;

const Date = styled.div`
  font-size: 11px;
  font-weight: 600;
  color: rgb(97, 97, 97);
  margin-top: 10px;
`;

const CardRight = styled.div`
  margin-left: 20px;
`;

const Album: React.FC<AlbumProps> = ({ item }) => {
  return (
    <Card>
      <img src={item?.artworkUrl100} alt='album_artWork' />
      <CardRight>
        <p>{item?.artistName}</p>
        <strong>{item?.collectionName}</strong>
        <Date>{item?.releaseDate?.substring(0, 10)}</Date>
      </CardRight>
    </Card>
  );
};

export default Album;
