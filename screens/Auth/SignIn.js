import React, { useState } from "react";
import { StatusBar, KeyboardAvoidingView } from "react-native";
import { useDispatch } from "react-redux";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/Auth/DismissKeyboard";
import { isEmail } from "../../utils";
import { userLogin } from "../../redux/usersSlice";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.View`
  margin-bottom: 30px;
`;

export default ({
  props: {
    route: { params },
  },
}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const isFormValid = () => {
    if (email === "" || password === "") {
      alert("All fields are required.");
      return false;
    }
    if (!isEmail(email)) {
      alert("Email is invalid");
      return false;
    }
  };
  const handleSubmit = () => {
    if (!isFormValid()) {
      return false;
    } else {
      dispatch(
        userLogin({
          username: email,
          password: password,
        })
      );
    }
  };
  return (
    <DismissKeyboard>
      <Container>
        <KeyboardAvoidingView>
          <StatusBar barStyle="dark-content" />
          <InputContainer>
            <Input
              value={email}
              placeholder="Email"
              autoCapitalize="none"
              keyboardType="email-address"
              stateFn={setEmail}
            />
            <Input
              value={password}
              placeholder="Password"
              isPassword={true}
              stateFn={setPassword}
            />
            <Btn text={"Sign In"} accent onPress={handleSubmit}></Btn>
          </InputContainer>
        </KeyboardAvoidingView>
      </Container>
    </DismissKeyboard>
  );
};
