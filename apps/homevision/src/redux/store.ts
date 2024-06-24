import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { base } from '../api/base';
import layoutsReducer from '../slices/layouts';

const reducers = combineReducers({
  [base.reducerPath]: base.reducer,
  layouts: layoutsReducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(base.middleware)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
