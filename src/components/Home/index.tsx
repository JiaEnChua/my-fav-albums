import React, { useState, useEffect } from 'react';
import axios from '../../shared/axios';
import Album from '../Album';
import NavBar from '../NavBar';
import { ituneEndpoint } from '../../shared/constant';
import { sortDesc } from '../../shared/utils';
import type { AlbumType } from '../../shared/type';
import styled from 'styled-components';

const HomeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home: React.FC = () => {
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
    <HomeCard>
      <NavBar />
      {albums?.map(
        (item) =>
          item.collectionName && <Album item={item} key={item.collectionId} />
      )}
    </HomeCard>
  );
};
export default Home;
