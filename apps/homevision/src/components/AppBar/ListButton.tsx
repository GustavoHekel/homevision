import { FC } from 'react';
import { Button } from '@homevision/ui';
import { useAppDispatch } from '../../hooks';
import { setLayout } from '../../slices/layouts';
import { Layouts } from '../../constants/layouts';

const ListButton: FC = () => {

  const dispatch = useAppDispatch();

  const handleChangeToList = () => {
    dispatch(setLayout({
      viewMode: Layouts.LIST
    }))
  }

  return (
    <Button variant={"contained"} color={"info"} label={"Switch to List"} onClick={handleChangeToList}/>
  )
}

export default ListButton
