import { FC } from 'react';
import { Button as MuiButton, ButtonProps } from '@mui/material';

interface ButtonInterface extends ButtonProps {
  label: string;
}

const Button: FC<ButtonInterface> = (props) => {

  const { label, ...rest } = props;

  return (
    <MuiButton {...rest}>{label}</MuiButton>
  );

};

export default Button;
