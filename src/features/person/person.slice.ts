import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface UsersState {
  users: any;
  isLoading: boolean;
  errorMessage: string;
}
interface RootObject {
  userId: number;
  id: number;
  title: string;
  body: string;
}
interface TodoState {
  users: RootObject;
}

const initialState: UsersState = {
  isLoading: true,
  errorMessage: "",
  users: [],
};

const getAllPerson = createAsyncThunk("user/getAllPerson", async () => {
  try {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/posts`
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

const PersonSlice = createSlice({
  name: "person",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllPerson.pending, (state: UsersState) => {
      state.isLoading = false;
    });
    builder.addCase(
      getAllPerson.fulfilled,
      (state: UsersState, action: PayloadAction<Array<RootObject>>) => {
        state.isLoading = false;
        state.users = action.payload;
      }
    );
  },
});

//export const {} = PersonSlice.actions;
export default PersonSlice.reducer;
