import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";

interface IOpenMenu {
  isOpenMenu: boolean;
}

const initialState: IOpenMenu = {
  isOpenMenu: true,
};
const MenuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    sideMenuControl: (state) => {
      console.log("Adding");
      console.log(state.isOpenMenu);
      state.isOpenMenu = !state.isOpenMenu;
    },
  },
});

export const { sideMenuControl } = MenuSlice.actions;
export default MenuSlice.reducer;
