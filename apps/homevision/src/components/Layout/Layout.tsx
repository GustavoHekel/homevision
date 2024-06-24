import { FC, PropsWithChildren } from 'react';
import AppBar from '../AppBar/AppBar';
import { Box, CssBaseline } from '@mui/material';

const Layout: FC<PropsWithChildren> = ({children}) => {
  return <>
    <CssBaseline/>
    <AppBar/>
    <Box
      sx={{
        padding: 1
      }}
    >
      {children}
    </Box>

  </>
}

export default Layout
