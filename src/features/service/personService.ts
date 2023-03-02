import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllPerson = createAsyncThunk("user/getAllPerson", async () => {
  try {
    const { data } = await axios.get(
      `https://6255745f52d8738c6922364f.mockapi.io/users`
    );
    return data;
  } catch (error) {
    return error.message;
  }
});

export const getPersonById = createAsyncThunk(
  "user/getPersonById",
  async (id: any) => {
    try {
      const { data } = await axios.get(
        `https://6255745f52d8738c6922364f.mockapi.io/users/${id}`
      );
      return data;
    } catch (error) {
      return error.message;
    }
  }
);
