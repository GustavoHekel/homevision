import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore, { MockStoreEnhanced } from 'redux-mock-store';
import { EnhancedStore } from '@reduxjs/toolkit';
import { Layouts } from '../../constants/layouts';
import AppBar from './AppBar';
import '@testing-library/jest-dom';
import { House } from '@homevision/interfaces';

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

describe('AppBar', () => {
  let store: EnhancedStore & MockStoreEnhanced;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test('renders', () => {
    render(
      <Provider store={store}>
        <AppBar />
      </Provider>
    );
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  test('renders text HomeVision', () => {
    render(
      <Provider store={store}>
        <AppBar />
      </Provider>
    );
    expect(screen.getByText('HomeVision')).toBeInTheDocument();
  });

  test('renders ListButton', () => {
    render(
      <Provider store={store}>
        <AppBar />
      </Provider>
    );
    expect(screen.getByRole('button', { name: /list/i })).toBeInTheDocument();
  });

  test('renders GridButton', () => {
    store = mockStore({
      layouts: {
        viewMode: Layouts.LIST,
        selectedHouse: null
      }
    });

    render(
      <Provider store={store}>
        <AppBar />
      </Provider>
    );
    expect(screen.getByRole('button', { name: /grid/i })).toBeInTheDocument();
  });
});
