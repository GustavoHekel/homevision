import { FC } from 'react';
import { Button } from '@homevision/ui';
import { useAppDispatch } from '../../hooks';
import { setLayout } from '../../slices/layouts';
import { Layouts } from '../../constants/layouts';

const GridButton: FC = () => {

  const dispatch = useAppDispatch();

  const handleChangeToGrid = () => {
    dispatch(setLayout({
      viewMode: Layouts.GRID
    }))
  }

  return (
    <Button variant={"contained"} color={"info"} label={"Switch to Grid"} onClick={handleChangeToGrid}/>
  )
}

export default GridButton
