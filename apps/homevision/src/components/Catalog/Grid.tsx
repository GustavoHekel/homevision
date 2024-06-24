import { FC } from 'react';
import { House } from '@homevision/interfaces';
import { MediaCard } from '@homevision/ui';
import MediaContent from '../MediaContent/MediaContent';
import { Grid as MuiGrid } from '@mui/material';
import ActionButton from './ActionButton';

interface GridInterface {
  houses: House[]
}

const Grid: FC<GridInterface> = ({houses}) => {
  return <MuiGrid
    container
    rowSpacing={2}
    columnSpacing={4}
  >
    {houses && houses.map(house =>
      <MuiGrid
        item
        key={house.id}
        lg={3}
        md={4}
        sm={6}
        xs={12}
      >
        <MediaCard
          image={{
            alt: house.homeowner,
            src: house.photoURL
          }}
          content={<MediaContent {...house} />}
          actions={<ActionButton {...house}/>}
        />
      </MuiGrid>
    )}
  </MuiGrid>
}

export default Grid
