import { FC } from 'react';
import { Button } from '@homevision/ui';
import { useAppDispatch } from '../../hooks';
import { House } from '@homevision/interfaces';
import { setSelectedHouse, setShowDetailsDialog } from '../../slices/layouts';

const ActionButton: FC<House> = (house) => {

  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(setSelectedHouse({
      house
    }));
    dispatch(setShowDetailsDialog({
      show: true
    }))
  };

  return <Button color={'secondary'} variant={'contained'} label={'See more'} size={'small'} onClick={handleClick} />;
};

export default ActionButton;
