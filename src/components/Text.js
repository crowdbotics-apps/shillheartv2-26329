import React from "react";
import { StyleSheet, Text } from "react-native";
import { useTheme } from "react-native-elements";

export function Title({ children, style }) {
  const { theme } = useTheme();
  return <Text style={[themedStyles(theme).title, style]}>{children}</Text>;
}

export function SubTitle({ children, style }) {
  const { theme } = useTheme();
  return <Text style={[themedStyles(theme).subTitle, style]}>{children}</Text>;
}

export function LevelOneText({ children, style }) {
  const { theme } = useTheme();
  return <Text style={[themedStyles(theme).levelOne, style]}>{children}</Text>;
}

export function LevelTwoText({ children, style }) {
  const { theme } = useTheme();
  return <Text style={[themedStyles(theme).levelTwo, style]}>{children}</Text>;
}

export function ErrorText({ children, style }) {
  const { theme } = useTheme();
  return <Text style={[themedStyles(theme).error, style]}>{children}</Text>;
}

const themedStyles = (theme) =>
  StyleSheet.create({
    title: {
      fontFamily: theme.fonts.semi_bold,
      fontSize: 24,
      color: theme.colors.text,
    },
    subTitle: {
      fontFamily: theme.fonts.semi_bold,
      fontSize: 18,
      color: theme.colors.primary,
    },
    levelOne: {
      color: theme.colors.primary,
      fontSize: 16,
      fontFamily: theme.fonts.regular,
    },
    levelTwo: {
      color: theme.colors.text,
      fontSize: 14,
      lineHeight: 25,
      fontFamily: theme.fonts.medium,
    },
    error: {
      color: theme.colors.secondary,
      fontFamily: theme.fonts.light,
    },
  });
