import { createSlice } from "@reduxjs/toolkit";
import { createUser, deleteUser, editUser, fetchUser } from "./thunk";

const initialState = {
  user: [],
  editUserData: {},
  editIndex: -1,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(createUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });


    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.loading = false;
      let data = action.payload;
      let newData = [];
      for (let key in data) {
        newData.push({ ...data[key], id: key });
      }
      state.user = newData;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });


    builder.addCase(deleteUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = state.user.filter(user => user.id !== action.payload);
    });
    builder.addCase(deleteUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });


    builder.addCase(editUser.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(editUser.fulfilled, (state, action) => {
      // console.log("Updated in reducer:", action.payload);
      state.loading = false;
      state.user = state.user.map(user => {
        if (user.id === action.payload.id) {
          return action.payload;  
        }
        return user;
      });
    });

    builder.addCase(editUser.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
      state.errorMsg = action.payload;
    })
  },
});

export default userSlice.reducer;