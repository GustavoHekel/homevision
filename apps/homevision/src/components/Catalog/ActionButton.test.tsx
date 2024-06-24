import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { EnhancedStore } from '@reduxjs/toolkit';
import ActionButton from './ActionButton';
import { setSelectedHouse, setShowDetailsDialog } from '../../slices/layouts';
import '@testing-library/jest-dom';
import { useAppDispatch } from '../../hooks';
import { House } from '@homevision/interfaces';
import { Layouts } from '../../constants/layouts';

jest.mock('../../hooks', () => ({
  useAppDispatch: jest.fn()
}));

interface RootState {
  layouts: {
    viewMode: string;
    selectedHouse: House | null
  };
}

const mockStore = configureStore<RootState>([]);
const mockHouse: House = {
  id: 1,
  address: '123 Sample St',
  price: 1000000,
  homeowner: 'Homeowner test',
  photoURL: ''
};

const initialState = {
  layouts: {
    viewMode: Layouts.GRID,
    selectedHouse: mockHouse
  }
};



describe('ActionButton Component', () => {
  let store: EnhancedStore & MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders ActionButton component', () => {
    render(
      <Provider store={store}>
        <ActionButton {...mockHouse} />
      </Provider>
    );
    expect(screen.getByRole('button', { name: /see more/i })).toBeInTheDocument();
  });

  test('renders Button with correct label', () => {
    render(
      <Provider store={store}>
        <ActionButton {...mockHouse} />
      </Provider>
    );
    expect(screen.getByText('See more')).toBeInTheDocument();
  });

  test('dispatches setSelectedHouse and setShowDetailsDialog actions with correct payload on click', () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <ActionButton {...mockHouse} />
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: /see more/i }));

    expect(dispatch).toHaveBeenCalledWith(setSelectedHouse({ house: mockHouse }));
    expect(dispatch).toHaveBeenCalledWith(setShowDetailsDialog({ show: true }));
  });
});
