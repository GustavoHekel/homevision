import { FC } from 'react';
import { House } from '@homevision/interfaces';
import { MediaRow } from '@homevision/ui';
import MediaContent from '../MediaContent/MediaContent';
import ActionButton from './ActionButton';

interface ListInterface {
  houses: House[];
}

const List: FC<ListInterface> = ({ houses }) => {
  return (
    <>
      {houses.map(house => <MediaRow
        key={house.id}
        image={{
          src: house.photoURL,
          alt: house.homeowner
        }}
        content={<MediaContent {...house} />}
        actions={<ActionButton {...house}/>}
      />)}
    </>
  );
};

export default List;
