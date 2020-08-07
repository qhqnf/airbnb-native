import React, { useState } from "react";
import { StatusBar, KeyboardAvoidingView, Keyboard } from "react-native";
import styled from "styled-components/native";
import Btn from "../../components/Auth/Btn";
import Input from "../../components/Auth/Input";
import DismissKeyboard from "../../components/Auth/DismissKeyboard";

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
  const [username, setUsername] = useState(params?.email);
  const [password, setPassword] = useState(params?.password);
  const handleSubmit = () => alert(`${username}${password}`);
  return (
    <DismissKeyboard>
      <Container>
        <KeyboardAvoidingView>
          <StatusBar barStyle="dark-content" />
          <InputContainer>
            <Input
              value={username}
              placeholder="Username"
              autoCapitalize="none"
              stateFn={setUsername}
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
