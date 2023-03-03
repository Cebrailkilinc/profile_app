import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import MenuSlice from "../features/menu/menu.slice";
import PersonSlice from "../features/person/person.slice";

export const store = configureStore({
  reducer: {
    person: PersonSlice,
    menu: MenuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  undefined,
  Action<string>
>;
