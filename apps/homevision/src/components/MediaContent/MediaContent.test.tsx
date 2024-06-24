import React from 'react';
import { render, screen } from '@testing-library/react';
import MediaContent from './MediaContent';
import '@testing-library/jest-dom';
import { House } from '@homevision/interfaces';
import { useGetPrice } from '../../hooks';

jest.mock('../../hooks', () => ({
  useGetPrice: jest.fn()
}));

const mockHouse: Pick<House, 'homeowner' | 'price' | 'address'> = {
  homeowner: 'John Doe',
  price: 1000000,
  address: '123 Sample St'
};

describe('MediaContent Component', () => {
  beforeEach(() => {
    (useGetPrice as jest.Mock).mockReturnValue('$1,000,000');
  });

  test('renders MediaContent component', () => {
    render(<MediaContent {...mockHouse} />);
    expect(screen.getByText(/price:/i)).toBeInTheDocument();
    expect(screen.getByText(/homeowner:/i)).toBeInTheDocument();
    expect(screen.getByText(/address:/i)).toBeInTheDocument();
  });

  test('displays the correct price, homeowner, and address', () => {
    render(<MediaContent {...mockHouse} />);
    expect(screen.getByText('Price: $1,000,000')).toBeInTheDocument();
    expect(screen.getByText('Homeowner: John Doe')).toBeInTheDocument();
    expect(screen.getByText('Address: 123 Sample St')).toBeInTheDocument();
  });

  test('calls useGetPrice hook with the correct price', () => {
    render(<MediaContent {...mockHouse} />);
    expect(useGetPrice).toHaveBeenCalledWith(mockHouse.price);
  });
});
