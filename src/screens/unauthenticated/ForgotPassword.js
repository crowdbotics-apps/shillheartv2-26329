import React from "react";
import { useForm } from "react-hook-form";
import { useNavigation } from "@react-navigation/native";
import { yupResolver } from "@hookform/resolvers/yup";

import { PrimaryButton } from "../../components/Button";
import {
  PasswordContainer,
  PressableContainer,
} from "../../components/Container";
import { PlainInput } from "../../components/Input";
import { SubTitle } from "../../components/Text";
import { EMAIL_SENT, LOGIN } from "../../constants/route";
import emailSchema from "../../schemas/email";

export default function ForgotPassword() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(emailSchema),
  });
  function showLogin() {
    navigation.navigate(LOGIN);
  }
  const resetPassword = handleSubmit(function (data) {
    navigation.navigate(EMAIL_SENT);
  });
  return (
    <PasswordContainer
      title="Forgot your password?"
      subTitle="We’ll help you reset it and get back on track."
    >
      <PlainInput
        control={control}
        name="email"
        placeholder="Email"
        keyboardType="email-address"
        returnKeyType="send"
        error={errors.email}
      />
      <PrimaryButton
        onPress={resetPassword}
        title={"Reset Password"}
        containerStyle={{ paddingVertical: 30 }}
      />
      <PressableContainer onPress={showLogin}>
        <SubTitle>Log in</SubTitle>
      </PressableContainer>
    </PasswordContainer>
  );
}
