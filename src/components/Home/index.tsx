import React, { useState, useEffect } from 'react';
import axios from '../../shared/axios';
import Album from '../Album';
import NavBar from '../NavBar';
import { ituneEndpoint } from '../../shared/constant';
import { sortDesc } from '../../shared/utils';
import type { AlbumType } from '../../shared/type';
import styled from 'styled-components';
import { delay } from 'lodash';
import NotFound from '../NotFound';

const HomeCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Home: React.FC = () => {
  const [albums, setAlbums] = useState<Array<AlbumType>>([]);
  const [loading, setLoading] = useState<Boolean>(true);
  const [errorHappened, setErrorHappened] = useState<number>(0);
  const fetchApi = () => {
    axios
      .get(ituneEndpoint)
      .then((response) => {
        const resArray = response.data.results;
        const sortedArray = sortDesc(resArray);
        setAlbums(sortedArray);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true);
        setErrorHappened(errorHappened + 1);
        console.log(err.response.data);
      });
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (errorHappened && loading) {
    if (errorHappened < 3) {
      delay(() => {
        fetchApi();
      }, 3000);
    } else {
      return <NotFound />;
    }
  }
  return (
    <HomeCard>
      <NavBar />
      {!loading ? (
        albums?.map(
          (item) =>
            item.collectionName && <Album item={item} key={item.collectionId} />
        )
      ) : (
        <p>Loading...</p>
      )}
    </HomeCard>
  );
};
export default Home;
