import { Layouts } from '../constants/layouts';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { House } from '@homevision/interfaces';

export interface LayoutsSliceInitialStateInterface {
  viewMode: string;
  showDetailsDialog: boolean;
  selectedHouse?: House | null;
}

const initialState: LayoutsSliceInitialStateInterface = {
  viewMode: Layouts.GRID,
  showDetailsDialog: false
};

export const layoutsSlice = createSlice({
  name: 'layouts',
  initialState,
  reducers: {
    setLayout: (state, action: PayloadAction<{ viewMode: string }>) => {
      state.viewMode = action.payload.viewMode;
    },
    setShowDetailsDialog: (state, action: PayloadAction<{ show: boolean }>) => {
      state.showDetailsDialog = action.payload.show;
    },
    setSelectedHouse: (state, action: PayloadAction<{ house: House | null }>) => {
      state.selectedHouse = action.payload.house;
    }
  }
});

export const {
  setLayout,
  setShowDetailsDialog,
  setSelectedHouse
} = layoutsSlice.actions;

export default layoutsSlice.reducer;
