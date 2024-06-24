import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { EnhancedStore } from '@reduxjs/toolkit';
import GridButton from './GridButton';
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
    viewMode: Layouts.GRID
  }
};

describe('GridButton', () => {
  let store: EnhancedStore & MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders', () => {
    render(
      <Provider store={store}>
        <GridButton />
      </Provider>
    );
    expect(screen.getByRole('button', { name: /switch to grid/i })).toBeInTheDocument();
  });

  test('renders Button with correct label', () => {
    render(
      <Provider store={store}>
        <GridButton />
      </Provider>
    );
    expect(screen.getByText('Switch to Grid')).toBeInTheDocument();
  });

  test('dispatches setLayout action', () => {
    const dispatch = jest.fn();
    (useAppDispatch as jest.Mock).mockReturnValue(dispatch);

    render(
      <Provider store={store}>
        <GridButton />
      </Provider>
    );

    fireEvent.click(screen.getByRole('button', { name: /switch to grid/i }));

    expect(dispatch).toHaveBeenCalledWith(setLayout({ viewMode: Layouts.GRID }));
  });
});
