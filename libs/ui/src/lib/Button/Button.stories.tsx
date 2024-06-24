import type { Meta } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'success', 'warning', 'error'],
      control: {type: 'select'}
    },
    variant: {
      options: ['contained', 'text', 'outlined'],
      control: {type: 'radio'}
    }
  }
};
export default meta;

export const Primary = {
  args: {
    label: 'Hello',
    disabled: false,
    color: 'primary',
    variant: 'contained'
  },
  parameters: {
    controls: {
      exclude: ['ref', 'component']
    }
  }
};
