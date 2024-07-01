import { FC } from 'react';
import { Box, Typography } from '@mui/material';
import { House } from '@homevision/interfaces';
import { useGetPrice } from '../../hooks';

type MediaCardContentType = Pick<House, 'homeowner' | 'price' | 'address'>

const MediaContent: FC<MediaCardContentType> = ({ address, homeowner, price }) => {

  const formattedPrice = useGetPrice(price)

  return <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 1
    }}
  >
    <Typography variant={"h5"} fontWeight={600}>{formattedPrice}</Typography>
    <Typography variant={"h7"} noWrap>{address}</Typography>
    <Typography variant={"caption"}>Homeowner: {homeowner}</Typography>
  </Box>;
};

export default MediaContent;
