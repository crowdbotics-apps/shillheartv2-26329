import React from "react";
import { StyleSheet, Text } from "react-native";
import { Controller } from "react-hook-form";
import { useTheme } from "react-native-elements";
import { PressableContainer } from "./Container";
import Rectangle from "../icons/Rectangle";
import RectangleFilled from "../icons/RectangleFilled";

export default function Checkbox({ control, name, label }) {
  const { theme } = useTheme();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <PressableContainer
          onPress={() => {
            onChange(!value);
          }}
          style={styles.container}
        >
          {value ? <RectangleFilled /> : <Rectangle />}
          <Text style={themedStyles(theme).label}>{label}</Text>
        </PressableContainer>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 48,
    paddingTop: 36,
  },
});

const themedStyles = (theme) =>
  StyleSheet.create({
    label: {
      paddingLeft: 10,
      fontSize: 16,
      fontFamily: theme.fonts.regular,
      color: theme.colors.gray,
    },
  });
