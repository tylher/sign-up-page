import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: {},
  loading: false,
  isLoggedIn: false,
  error: "",
  token: "",
};

export const createUser = createAsyncThunk(
  "user/createUser",
  async ({ first_name, second_name, email, password }, { rejectWithValue }) => {
    try {
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
          const result = {
            authorization: res.headers.getAuthorization(),
            user: res.data.data,
            status: res.status,
          };

          return result;
        });
    } catch (err) {
      return rejectWithValue(err.response);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createUser.fulfilled, (state, { payload }) => {
      state.isLoggedIn = true;
      state.user = payload.user;
      state.token = payload.authorization;
      state.loading = false;
      state.error = "";
      state.status = "";
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload.data.message;
      state.status = action.payload.status;
      state.loading = false;
    });
  },
});

export default userSlice.reducer;
