import {configureStore} from '@reduxjs/toolkit';
import adsReduser from './adsSlice';

const store = configureStore({
  reducer: {
    adsList: adsReduser,
  }
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
