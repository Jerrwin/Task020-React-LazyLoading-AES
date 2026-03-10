import { configureStore } from '@reduxjs/toolkit';
import appointmentsReducer from '../features/appointmentsSlice';
import doctorReducer from '../features/doctorSlice';

export const store = configureStore({
  reducer: {
    appointments: appointmentsReducer,
    doctor: doctorReducer,
  },
});