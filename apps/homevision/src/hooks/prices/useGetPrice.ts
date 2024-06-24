import { useMemo } from 'react';

export const useGetPrice = (price: number) => {

  return useMemo(() => {
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return formatter.format(price);
  }, [price]);

};
