import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { logIn, logOut } from "../redux/usersSlice";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "../navigation/Auth";

export default () => {
  const { isLoggedIn } = useSelector((state) => state.usersReducer);
  const dispatch = useDispatch();
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <TouchableOpacity onPress={() => dispatch(logOut())}>
          <Text>Log out</Text>
        </TouchableOpacity>
      ) : (
        <Auth />
      )}
    </NavigationContainer>
  );
};
