import { FC, useEffect, useState } from 'react';
import { LinearProgress } from '@mui/material';
import { Button } from '@homevision/ui';
import Grid from './Grid';
import { House } from '@homevision/interfaces';
import { useLazyGetHousesQuery } from '../../api/houses';
import InfiniteScroll from 'react-infinite-scroll-component';
import List from './List';
import { useAppSelector } from '../../hooks';
import { Layouts } from '../../constants/layouts';
import Details from '../Details/Details';

const Catalog: FC = () => {

  const { viewMode } = useAppSelector(state => state.layouts);

  const [query, setQuery] = useState({
    page: 1,
    per_page: 12
  });
  const [houses, setHouses] = useState<House[]>([]);
  const [getHouses, { isError, isFetching }] = useLazyGetHousesQuery();

  useEffect(() => {
    getHouses({
      ...query,
      page: query.page
    }, true).then(res => {

      if (res.data && res.data.houses) {
        const newHouses = res.data.houses;
        setHouses(prev => [...prev, ...newHouses]);
      }

    });
  }, [getHouses, query, query.page]);

  const loadMoreHouses = () => {
    setQuery({
      ...query,
      page: query.page + 1
    });
  };

  return (
    <>
      <InfiniteScroll
        next={loadMoreHouses}
        hasMore={query.page <= 100}
        loader={<></>}
        // loader={!isError && <LinearProgress color={'secondary'} />}
        dataLength={houses.length}
      >
        {viewMode === Layouts.GRID ? <Grid houses={houses} /> : <List houses={houses} />}
      </InfiniteScroll>
      {isFetching && <LinearProgress color={'secondary'} />}
      <Details/>
      {isError && <Button label={'Load more houses'} onClick={loadMoreHouses} />}
    </>

  );
};

export default Catalog;
