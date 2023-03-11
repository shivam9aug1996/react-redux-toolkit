import { createAsyncThunk, createReducer, createSlice } from "@reduxjs/toolkit";
// import { updateAge } from "../actions";

let initialState = {
  name: "shivam",
  age: 15,
};

// export const userReducer = (state, action) => {
//   if (action.type == "UPDATE_NAME") {
//     return {
//       ...state,
//       name: action.payload,
//     };
//   }
//   if (action.type == "UPDATE_AGE") {
//     return {
//       ...state,
//       age: action.payload,
//     };
//   }
//   return state;
// };

// export const userReducer = createReducer(initialState, (builder) => {
//   builder.addCase("UPDATE_NAME", (state, action) => {
//     state.name = action.payload;
//   });
//   builder.addCase(updateAge, (state, action) => {
//     state.age = action.payload;
//   });
// });

export const updateAgeAsync = createAsyncThunk(
  "updateAgeAsync",
  async (age, { rejectWithValue }) => {
    try {
      let promise = new Promise((resolve, reject) => {
        setTimeout(() => reject("Error"), 1000);
      });
      let result = await promise;
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

const userReducer = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload;
    },
    updateAge: (state, action) => {
      state.age = action.payload;
    },
  },
  extraReducers: {
    [updateAgeAsync.fulfilled]: (state, action) => {
      state.age = action.payload;
    },
    [updateAgeAsync.pending]: (state, action) => {
      state.age = "Loading!";
    },
    [updateAgeAsync.rejected]: (state, action) => {
      state.age = action.payload;
    },
  },
});

export const { updateAge, updateName } = userReducer.actions;

export default userReducer.reducer;
