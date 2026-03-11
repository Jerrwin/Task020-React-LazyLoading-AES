import { createSlice } from "@reduxjs/toolkit";
import { appointmentsApi } from "../api/appointmentsApi";

// 2. Initial State now uses that helper function instead of hardcoded data
const initialState = {
  list: appointmentsApi.getAll(),
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      // console.log("Action type:", action.type, "Payload:", action.payload);
      // 1. Update Redux
      state.list.push(action.payload);
      // 2. Save the new list to Local Storage via API
      appointmentsApi.saveAll(state.list);
    },

    updateStatus: (state, action) => {
      // console.log("Action type:", action.type, "Payload:", action.payload);
      const { id, newStatus } = action.payload;
      const appointment = state.list.find((app) => app.id === id);
      if (appointment) {
        // 1. Update Redux
        appointment.status = newStatus;
        // 2. Save the new list to Local Storage via API
        appointmentsApi.saveAll(state.list);
      }
    },

    deleteAppointment: (state, action) => {
      // console.log("Action type:", action.type, "Payload:", action.payload);
      // 1. Update Redux
      state.list = state.list.filter((app) => app.id !== action.payload);
      // 2. Save the new list to Local Storage via API
      appointmentsApi.saveAll(state.list);
    },
  },
});

export const { addAppointment, updateStatus, deleteAppointment } =
  appointmentsSlice.actions;
export default appointmentsSlice.reducer;
