import { createAction } from "@reduxjs/toolkit";

// export const updateName = (name) => {
//   return {
//     type: "UPDATE_NAME",
//     payload: name,
//   };
// };

// export const updateAge = (age) => {
//   return {
//     type: "UPDATE_AGE",
//     payload: age,
//   };
// };

export const updateAgeAsync = (age) => (dispatch) => {
  setTimeout(() => {
    dispatch(updateAge(60));
  }, 2000);
};

export const updateName = createAction("UPDATE_NAME");
export const updateAge = createAction("UPDATE_AGE");
