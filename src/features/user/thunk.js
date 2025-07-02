import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../axios/axiosApi";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (user, { rejectWithValue }) => {
    try {
      let res = await axiosInstance.post("/.json", user);
      return { ...user, id: res.data.name };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (_, rejectWithValue) => {
    try {
      let res = await axiosInstance.get("/.json");

      return res.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  "user/deleteUser",
  async (id, { rejectWithValue }) => {
    try {
      let res = await axiosInstance.delete(`${id}/.json`);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const editUser = createAsyncThunk(
  "user/editUser",
  async (user, { rejectWithValue }) => {
    try {
      const updatedData = {
        username: user.username,
        email: user.email,
        password: user.password,
        mobile: user.mobile,
        role: user.role,
      };

      await axiosInstance.put(`${user.id}/.json`, updatedData);
      return { ...updatedData, id: user.id };  
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
