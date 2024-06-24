import { FC } from 'react';
import { Dialog, DialogContent, DialogTitle} from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { setShowDetailsDialog } from '../../slices/layouts';
import { Button } from '@homevision/ui';
import MediaContent from '../MediaContent/MediaContent';

const Details: FC = () => {

  const dispatch = useAppDispatch();
  const { showDetailsDialog, selectedHouse } = useAppSelector(state => state.layouts);

  const handleClose = () => {
    dispatch(setShowDetailsDialog({
      show: false
    }));
  };


  return (
    <Dialog
      open={showDetailsDialog}
      onClose={handleClose}
    >
      <DialogTitle>
        # {selectedHouse?.id}
      </DialogTitle>

      <Button
        sx={{
          position: 'absolute',
          right: 8,
          top: 8
        }}
        label={'Close'}
        onClick={handleClose}
        variant={'contained'}
        color={'secondary'}
      />
      <DialogContent>
        {selectedHouse && <MediaContent {...selectedHouse} />}
      </DialogContent>
    </Dialog>
  );
};

export default Details;
