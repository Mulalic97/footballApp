import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import footballReducer from '../features/football/footballSlice'


console.log({counterReducer:counterReducer})
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    football:footballReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;
