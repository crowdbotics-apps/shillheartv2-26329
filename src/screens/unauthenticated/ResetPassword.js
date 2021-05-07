import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { StyleSheet } from "react-native";
import { yupResolver } from "@hookform/resolvers/yup";

import { PrimaryButton } from "../../components/Button";
import { PasswordContainer } from "../../components/Container";
import { PasswordInput } from "../../components/Input";
import passwordSchema from "../../schemas/password";

export default function ResetPassword() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
    clearErrors,
  } = useForm({
    resolver: yupResolver(passwordSchema),
  });

  useEffect(() => {
    clearErrors();
  }, []);

  const setNewPassword = handleSubmit(function (data) {});
  return (
    <PasswordContainer
      title="Password Reset"
      subTitle="Please enter your new password. "
    >
      <PasswordInput
        control={control}
        name="password"
        placeholder="Password"
        containerStyle={styles.input}
        error={errors.password}
      />
      <PasswordInput
        control={control}
        name="confirm_password"
        placeholder="Confirm Password"
        containerStyle={styles.input}
        error={errors.confirm_password}
      />
      <PrimaryButton onPress={setNewPassword} title="Set New Password" />
    </PasswordContainer>
  );
}

const styles = StyleSheet.create({
  input: { paddingBottom: 46 },
});
