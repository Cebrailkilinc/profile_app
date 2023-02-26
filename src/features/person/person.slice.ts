import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [
      {
        key: "2",
        firstName: "Jim",
        lastName: "Green",
        age: 42,
        address: "London No. 1 Lake Park",
        tags: ["loser"],
      },
    ],
  };
  
  const PersonSlice = createSlice({
    name: "person",
    initialState,
    reducers: {
      
    },
  });
  
  export const { } = PersonSlice.actions;
  export default PersonSlice.reducer;