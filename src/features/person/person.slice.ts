import { createSlice } from "@reduxjs/toolkit";
import { getAllPerson } from "../service/personService";

interface UsersState {
  users: [];
  isLoading: boolean;
  errorMessage: string;
}

const initialState = {
  isLoading: false,
  errorMessage: "",
  users: [],
};

const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllPerson.pending.toString()]: (state) => {
      state.isLoading = true;
    },
  },
});

//export const {} = PersonSlice.actions;
export default PersonSlice.reducer;
