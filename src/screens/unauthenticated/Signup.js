import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, View } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import { PrimaryButton } from "../../components/Button";
import { AuthContainer, PressableContainer } from "../../components/Container";
import { PasswordInput, PlainInput } from "../../components/Input";
import { LevelOneText, SubTitle } from "../../components/Text";
import { LOGIN } from "../../constants/route";
import signupSchema from "../../schemas/signup";

export default function Signup() {
  const navigation = useNavigation();
  const {
    control,
    formState: { errors },
    handleSubmit,
    setFocus,
    clearErrors,
  } = useForm({
    resolver: yupResolver(signupSchema),
  });

  useEffect(() => {
    clearErrors();
  }, []);

  function showLogin() {
    navigation.navigate(LOGIN);
  }
  const createAccount = handleSubmit(function (data) {});
  return (
    <AuthContainer title="Create An Account">
      <PlainInput
        control={control}
        name="first_name"
        placeholder="First Name *"
        containerStyle={styles.input}
        error={errors.first_name}
      />
      <PlainInput
        control={control}
        name="last_name"
        placeholder="Last Name *"
        containerStyle={styles.input}
        error={errors.last_name}
      />
      <PlainInput
        control={control}
        name="email"
        placeholder="Email *"
        containerStyle={styles.input}
        error={errors.email}
      />
      <PlainInput
        control={control}
        name="phone_number"
        placeholder="Phone number *"
        containerStyle={styles.input}
        error={errors.phone_number}
      />
      <PlainInput
        control={control}
        name="company_name"
        placeholder="Company Name"
        containerStyle={styles.input}
        error={errors.company_name}
      />
      <PlainInput
        control={control}
        name="company_id"
        placeholder="Company ID"
        containerStyle={styles.input}
        error={errors.company_id}
      />
      <PlainInput
        control={control}
        name="position"
        placeholder="Position in the company"
        containerStyle={styles.input}
        error={errors.position}
      />
      <PasswordInput
        control={control}
        name="password"
        placeholder="Enter password"
        containerStyle={styles.input}
        error={errors.password}
      />
      <PasswordInput
        control={control}
        name="confirm_password"
        placeholder="Confirm password"
        containerStyle={styles.input}
        error={errors.confirm_password}
      />
      <PrimaryButton onPress={createAccount} title="Create Account" />
      <View style={styles.login}>
        <LevelOneText style={styles.account}>Have an account? </LevelOneText>
        <PressableContainer onPress={showLogin}>
          <SubTitle>Log in</SubTitle>
        </PressableContainer>
      </View>
    </AuthContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    paddingBottom: 36,
  },
  account: {
    fontSize: 18,
  },
  login: {
    paddingVertical: 36,
    flexDirection: "row",
    alignItems: "center",
  },
});
