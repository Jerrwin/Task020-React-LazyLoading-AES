import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  doctorsList: [
    { id: "d1", name: "Dr. John", specialty: "Cardiology" },
    { id: "d2", name: "Dr. Sarah", specialty: "Neurology" },
    { id: "d3", name: "Dr. Mike", specialty: "Pediatrics" },
  ],
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {
    // Left empty on purpose! 
    // This slice acts as a "Read-Only" database for the application.
  },
});

export default doctorSlice.reducer;