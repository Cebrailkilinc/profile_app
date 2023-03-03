import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllPerson, getPersonById } from "../service/personService";
import { RootObject, UsersState } from "../../types/types";

const initialState: UsersState = {
  isLoading: true,
  errorMessage: "",
  users: [],
  currentUser: [],
};

const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //GET ALL USERS
    builder.addCase(getAllPerson.pending, (state: UsersState) => {
      state.isLoading = true;
    });
    builder.addCase(
      getAllPerson.fulfilled,
      (state: UsersState, action: PayloadAction<Array<RootObject>>) => {
        state.isLoading = false;
        state.users = action.payload;
      }
    );
    builder.addCase(getAllPerson.rejected, (state: UsersState) => {
      state.isLoading = false;
      state.errorMessage = "Data not found !";
    });

    //GET USER BY ID
    builder.addCase(getPersonById.pending, (state: UsersState) => {
      state.isLoading = false;
    });
    builder.addCase(
      getPersonById.fulfilled,
      (state: UsersState, action: PayloadAction<Array<RootObject>>) => {
        state.isLoading = false;
        state.currentUser = action.payload;
      }
    );
    builder.addCase(getPersonById.rejected, (state: UsersState) => {
      state.isLoading = false;
      state.errorMessage = "Data not found !";
    });
  },
});

//export const {} = PersonSlice.actions;
export default PersonSlice.reducer;
