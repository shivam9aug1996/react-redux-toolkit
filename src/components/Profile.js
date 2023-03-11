import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateAgeAsync, updateName } from "../reducer/userReducer";

// import { updateAge, updateAgeAsync, updateName } from "../actions";

const Profile = () => {
  const { name, age } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleNameChange = () => {
    // dispatch({ type: "UPDATE_NAME", payload: "shiv" });
    dispatch(updateName("shiv"));
  };
  const handleAgeChangeAsync = () => {
    //dispatch(updateAge(60));
    // dispatch(updateAgeAsync(60));
    // dispatch({ type: "UPDATE_AGE", payload: 15 });
    dispatch(updateAgeAsync(60))
      .unwrap()
      .then((res) => {
        console.log("nhgr56trfghj", res);
      })
      .catch((err) => {
        console.log("error556", err);
      });
  };
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => handleNameChange()}>Update name</button>
      <h1>{age}</h1>
      <button onClick={() => handleAgeChangeAsync()}>Update age async</button>
    </div>
  );
};

export default Profile;
