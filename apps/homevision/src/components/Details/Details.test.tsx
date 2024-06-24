import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { EnhancedStore } from '@reduxjs/toolkit';
import Details from './Details';
import { setShowDetailsDialog } from '../../slices/layouts';
import '@testing-library/jest-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { House } from '@homevision/interfaces';

jest.mock('../../hooks', () => ({
  useAppDispatch: jest.fn(),
  useAppSelector: jest.fn(),
  useGetPrice: jest.fn()
}));

interface RootState {
  layouts: {
    showDetailsDialog: boolean
    selectedHouse: House | undefined
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
    showDetailsDialog: true,
    selectedHouse: mockHouse
  }
};

describe('Details Component', () => {
  let store: EnhancedStore & MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialState);
    (useAppSelector as jest.Mock).mockImplementation(callback => {
      return callback(store.getState());
    });
  });

  test('renders Details component', () => {
    render(
      <Provider store={store}>
        <Details />
      </Provider>
    );
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  test('renders dialog with correct house details', () => {
    render(
      <Provider store={store}>
        <Details />
      </Provider>
    );
    expect(screen.getByText(`# ${mockHouse.id}`)).toBeInTheDocument();
  });

  test('dispatches setShowDetailsDialog action with show: false on close', () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <Details />
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: /close/i }));

    expect(dispatch).toHaveBeenCalledWith(setShowDetailsDialog({ show: false }));
  });
});
