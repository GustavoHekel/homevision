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
    <Typography variant={"caption"}>Price: {formattedPrice}</Typography>
    <Typography variant={"caption"}>Homeowner: {homeowner}</Typography>
    <Typography variant={"caption"} noWrap>Address: {address}</Typography>
  </Box>;
};

export default MediaContent;
