import { FC } from 'react';
import { Typography } from '@mui/material';

const FallbackError: FC = () => {
  return <Typography variant={"caption"}>An error has occurred. Please try again later</Typography>
}

export default FallbackError
