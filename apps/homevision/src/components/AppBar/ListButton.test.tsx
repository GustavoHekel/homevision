import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { EnhancedStore } from '@reduxjs/toolkit';
import ListButton from './ListButton';
import { setLayout } from '../../slices/layouts';
import { Layouts } from '../../constants/layouts';
import '@testing-library/jest-dom';
import { useAppDispatch } from '../../hooks';

jest.mock('../../hooks', () => ({
  useAppDispatch: jest.fn()
}));

interface RootState {
  layouts: {
    viewMode: string;
  };
}

const mockStore = configureStore<RootState>([]);
const initialState: RootState = {
  layouts: {
    viewMode: Layouts.LIST
  }
};

describe('ListButton', () => {
  let store: EnhancedStore & MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders', () => {
    render(
      <Provider store={store}>
        <ListButton />
      </Provider>
    );
    expect(screen.getByRole('button', { name: /switch to list/i })).toBeInTheDocument();
  });

  test('renders Button with correct label', () => {
    render(
      <Provider store={store}>
        <ListButton />
      </Provider>
    );
    expect(screen.getByText('Switch to List')).toBeInTheDocument();
  });

  test('dispatches setLayout action', () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <ListButton />
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: /switch to list/i }));

    expect(dispatch).toHaveBeenCalledWith(setLayout({ viewMode: Layouts.LIST }));
  });
});
