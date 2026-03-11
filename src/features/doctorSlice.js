import { createSlice } from "@reduxjs/toolkit";
import { dummyDoctors } from "../api/doctorsApi";

const initialState = {
  doctorsList: dummyDoctors,
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {},
});

export default doctorSlice.reducer;
