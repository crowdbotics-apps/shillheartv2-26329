import React from "react";
import { StyleSheet } from "react-native";
import { Button, useTheme } from "react-native-elements";

export function PrimaryButton({
  containerStyle,
  buttonStyle,
  titleStyle,
  title,
  onPress,
}) {
  const { theme } = useTheme();
  return (
    <Button
      containerStyle={[styles.container, containerStyle]}
      buttonStyle={[themedStyles(theme).button, buttonStyle]}
      titleStyle={[themedStyles(theme).title, titleStyle]}
      title={title}
      onPress={onPress}
    />
  );
}

const themedStyles = (theme) =>
  StyleSheet.create({
    button: { paddingVertical: 18, borderRadius: theme.borderRadius },
    title: {
      textTransform: "uppercase",
      fontSize: 18,
      fontFamily: theme.fonts.medium,
    },
  });

const styles = StyleSheet.create({
  container: { width: "100%" },
});
