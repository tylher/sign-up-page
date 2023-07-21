import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  loading: false,
  isLoggedIn: false,
  error: "",
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ first_name, second_name, email, password }) => {
    return await axios
      .post(
        "http://localhost:3000/users",

        { user: { first_name, second_name, email, password } },
        {
          headers: {
            Authorization: "Bearer ",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        return res.headers.getAuthorization();
      });
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = false;
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload;
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
    });
  },
});

export default userSlice.reducer;
