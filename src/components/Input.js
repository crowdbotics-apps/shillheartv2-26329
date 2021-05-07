import React, { forwardRef, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { Controller } from "react-hook-form";
import { useTheme } from "react-native-elements";
import Visibility from "../icons/Visibility";
import { PressableContainer } from "./Container";
import VisibilityCross from "../icons/VisibilityCross";
import { ErrorText } from "./Text";

const Input = forwardRef(function (
  {
    onBlur,
    onChangeText,
    onSubmitEditing,
    keyboardType = "default",
    returnKeyType = "default",
    placeholder,
    value,
    secureTextEntry,
    style,
  },
  ref
) {
  const { theme } = useTheme();
  return (
    <TextInput
      onBlur={onBlur}
      style={[themedStyles(theme).input, style]}
      placeholder={placeholder}
      placeholderTextColor={theme.colors.text}
      value={value}
      onChangeText={onChangeText}
      ref={ref}
      onSubmitEditing={onSubmitEditing}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      secureTextEntry={secureTextEntry}
    />
  );
});

export function PlainInput({
  name,
  control,
  onSubmitEditing,
  placeholder,
  containerStyle,
  keyboardType,
  returnKeyType,
  secureTextEntry = false,
  RightIcon,
  error,
}) {
  const { theme } = useTheme();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onBlur, onChange, ref, value } }) => (
        <View style={[styles.inputContainer, containerStyle]}>
          <Input
            ref={ref}
            placeholder={placeholder}
            value={value}
            onBlur={onBlur}
            onChangeText={onChange}
            keyboardType={keyboardType}
            returnKeyType={returnKeyType}
            onSubmitEditing={onSubmitEditing}
            secureTextEntry={secureTextEntry}
            style={{
              paddingRight: RightIcon ? 28 : 0,
              borderBottomColor: error
                ? theme.colors.secondary
                : theme.colors.border,
            }}
            error={error}
          />
          <ErrorText style={styles.error}>
            {error ? error.message : " "}
          </ErrorText>
          {RightIcon && (
            <RightIcon width={24} height={24} style={styles.icon} />
          )}
        </View>
      )}
    />
  );
}

export function PasswordInput({
  name,
  control,
  onSubmitEditing,
  placeholder,
  containerStyle,
  keyboardType,
  returnKeyType,
  error,
}) {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  function toggleSecureTextEntry() {
    setSecureTextEntry((prevState) => !prevState);
  }
  function RightIcon({ width, height, style }) {
    return (
      <PressableContainer onPress={toggleSecureTextEntry} style={style}>
        {secureTextEntry ? (
          <Visibility width={width} height={height} />
        ) : (
          <VisibilityCross width={width} height={height} />
        )}
      </PressableContainer>
    );
  }
  return (
    <PlainInput
      name={name}
      control={control}
      onSubmitEditing={onSubmitEditing}
      placeholder={placeholder}
      containerStyle={containerStyle}
      keyboardType={keyboardType}
      returnKeyType={returnKeyType}
      secureTextEntry={secureTextEntry}
      RightIcon={RightIcon}
      error={error}
    />
  );
}

const themedStyles = (theme) =>
  StyleSheet.create({
    input: {
      borderBottomWidth: 1,
      paddingBottom: 14,
      fontSize: 16,
      fontFamily: theme.fonts.regular,
      color: theme.colors.text,
    },
  });

const styles = StyleSheet.create({
  inputContainer: {
    position: "relative",
    width: "100%",
  },
  icon: {
    position: "absolute",
    right: 0,
  },
  error: {
    paddingTop: 5,
  },
});
