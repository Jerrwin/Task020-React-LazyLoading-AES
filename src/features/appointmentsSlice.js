import { createSlice } from "@reduxjs/toolkit";

// 1. Helper function to check Local Storage safely when the app first loads
const loadFromLocalStorage = () => {
  try {
    const savedData = localStorage.getItem("appointmentsList");
    // If there's data, parse it from a string back into a JavaScript array
    if (savedData) return JSON.parse(savedData);
  } catch (error) {
    console.error("Could not load from Local Storage", error);
  }
  // If nothing is there, return an empty array so the table is blank
  return [];
};

// 2. Initial State now uses that helper function instead of hardcoded data
const initialState = {
  list: loadFromLocalStorage(),
};

const appointmentsSlice = createSlice({
  name: "appointments",
  initialState,
  reducers: {
    addAppointment: (state, action) => {
      // 1. Update Redux
      state.list.push(action.payload);
      // 2. Save the new list to Local Storage
      localStorage.setItem("appointmentsList", JSON.stringify(state.list));
    },

    updateStatus: (state, action) => {
      const { id, newStatus } = action.payload;
      const appointment = state.list.find((app) => app.id === id);
      if (appointment) {
        // 1. Update Redux
        appointment.status = newStatus;
        // 2. Save the new list to Local Storage
        localStorage.setItem("appointmentsList", JSON.stringify(state.list));
      }
    },

    deleteAppointment: (state, action) => {
      // 1. Update Redux
      state.list = state.list.filter((app) => app.id !== action.payload);
      // 2. Save the new list to Local Storage
      localStorage.setItem("appointmentsList", JSON.stringify(state.list));
    },
  },
});

export const { addAppointment, updateStatus, deleteAppointment } =
  appointmentsSlice.actions;
export default appointmentsSlice.reducer;
