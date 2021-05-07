import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import { PrimaryButton } from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import { AuthContainer, PressableContainer } from "../../components/Container";
import { PasswordInput, PlainInput } from "../../components/Input";
import loginSchema from "../../schemas/login";
import { LevelOneText, SubTitle } from "../../components/Text";
import { useNavigation } from "@react-navigation/native";
import { FORGOT_PASSWORD, SIGN_UP } from "../../constants/route";

export default function Login() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    clearErrors,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  useEffect(() => {
    clearErrors();
  }, []);

  const login = handleSubmit(function (data) {
    navigation.navigate('Auth')
  });
  function showSignup() {
    navigation.navigate(SIGN_UP);
  }
  function showForgotPassword() {
    navigation.navigate(FORGOT_PASSWORD);
  }
  return (
    <AuthContainer title="Log In">
      <PlainInput
        control={control}
        name="email"
        keyboardType="email-address"
        returnKeyType="next"
        placeholder="Email"
        onSubmitEditing={() => {}}
        containerStyle={styles.email}
        error={errors.email}
      />
      <PasswordInput
        control={control}
        name="password"
        returnKeyType="go"
        placeholder="Enter password"
        onSubmitEditing={() => {}}
        containerStyle={styles.password}
        error={errors.password}
      />
      <Checkbox control={control} name="remember" label="Remember me" />
      <PrimaryButton onPress={login} title="Log In" />
      <PressableContainer style={styles.createAccount} onPress={showSignup}>
        <SubTitle>Create Account</SubTitle>
      </PressableContainer>
      <PressableContainer
        style={styles.forgotPassword}
        onPress={showForgotPassword}
      >
        <LevelOneText>Forgot password?</LevelOneText>
      </PressableContainer>
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  email: { paddingBottom: 36 },
  createAccount: { marginTop: 45, marginBottom: 65 },
  forgotPassword: {
    marginBottom: 75,
  },
});
