import * as React from 'react';
import MuiAppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { FC } from 'react';
import { useAppSelector } from '../../hooks';
import ListButton from './ListButton';
import GridButton from './GridButton';
import { Layouts } from '../../constants/layouts';

const AppBar: FC = () => {

  const { viewMode } = useAppSelector(state => state.layouts);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MuiAppBar position="static" color={'secondary'}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HomeVision
          </Typography>
          {viewMode === Layouts.GRID ? <ListButton /> : <GridButton />}
        </Toolbar>
      </MuiAppBar>
    </Box>
  );
};

export default AppBar;
