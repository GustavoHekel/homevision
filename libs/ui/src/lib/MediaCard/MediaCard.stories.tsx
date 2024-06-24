import type { Meta } from '@storybook/react';
import MediaCard from './MediaCard';
import { Button } from '../../index';
import { Typography } from '@mui/material';

const meta: Meta<typeof MediaCard> = {
  component: MediaCard,
  title: 'MediaCard'
};
export default meta;

export const Primary = {
  args: {
    image: {
      src: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      alt: 'default-image'
    },
    content: <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', width: '284px' }}>
      <Typography variant={'caption'}>Price: $293.778</Typography>
      <Typography variant={'caption'} noWrap={true}>Address: 152 Big Rock Cove Ave. Goldsboro, NC 27530</Typography>
      <Typography variant={'caption'}>Homeowner: Alesha Holt</Typography>
    </div>,
    actions: <Button color={'secondary'} variant={'contained'} label={'See more'} size={'small'} />
  },
  parameters: {
    controls: {
      exclude: ['image', 'content', 'actions']
    }
  }
};
