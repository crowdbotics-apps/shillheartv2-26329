import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { Image, useTheme } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { SafeAreaView } from "react-native-safe-area-context";
import { Title, LevelTwoText } from "./Text";

const SAFE_AREA_EDGES = ["top", "bottom"];
const LOGO = require("../../assets/logo.png");

export function ScrollContainer({ children }) {
  const { theme } = useTheme();
  return (
    <KeyboardAwareScrollView
      style={themedStyles(theme).scrollContainer}
      contentContainerStyle={styles.scrollContentContainer}
      showsVerticalScrollIndicator={false}
      keyboardShouldPersistTaps="handled"
    >
      <SafeAreaView style={styles.safeArea} edges={SAFE_AREA_EDGES}>
        {children}
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
}

export function AuthContainer({ children, title }) {
  const { theme } = useTheme();
  return (
    <ScrollContainer>
      <Image style={styles.logo} source={LOGO} />
      <Title style={styles.title}>{title}</Title>
      {children}
      <View style={styles.footerContainer}>
        <Text style={themedStyles(theme).footer}>
          By using this app you agree to our{" "}
        </Text>
        <PressableContainer>
          <Text style={themedStyles(theme).terms}>Terms</Text>
        </PressableContainer>
      </View>
    </ScrollContainer>
  );
}

export function PasswordContainer({ children, title, subTitle }) {
  return (
    <ScrollContainer>
      <Title style={styles.passwordTitle}>{title}</Title>
      <LevelTwoText style={styles.passwordSubTitle}>{subTitle}</LevelTwoText>
      {children}
    </ScrollContainer>
  );
}

export function PressableContainer({ children, onPress, style }) {
  function pressableStyle({ pressed }) {
    return {
      ...style,
      opacity: pressed ? 0.5 : 1,
    };
  }
  return (
    <Pressable onPress={onPress} style={pressableStyle}>
      {children}
    </Pressable>
  );
}

const themedStyles = (theme) =>
  StyleSheet.create({
    scrollContainer: { backgroundColor: theme.colors.background },
    footer: {
      fontFamily: theme.fonts.regular,
      color: theme.colors.gray0,
      fontSize: 14,
    },
    terms: {
      fontFamily: theme.fonts.bold,
      color: theme.colors.primary,
      fontSize: 14,
    },
  });

const styles = StyleSheet.create({
  scrollContentContainer: { flexGrow: 1 },
  safeArea: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 42,
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  logo: {
    width: 249,
    height: 45,
  },
  title: {
    paddingTop: 50,
    paddingBottom: 75,
  },
  passwordTitle: { paddingBottom: 22 },
  passwordSubTitle: { paddingBottom: 75 },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
  },
});
