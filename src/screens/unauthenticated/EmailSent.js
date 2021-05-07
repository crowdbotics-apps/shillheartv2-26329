import React, { Fragment } from "react";
import { StyleSheet } from "react-native";
import { ScrollContainer } from "../../components/Container";
import { LevelTwoText, Title } from "../../components/Text";
import Padlock from "../../icons/Padlock";

export default function EmailSent() {
  return (
    <ScrollContainer>
      <Padlock />
      <Title style={styles.title}>Password reset</Title>
      <LevelTwoText>
        If you have an account, we'll email you a reset link.
      </LevelTwoText>
    </ScrollContainer>
  );
}

const styles = StyleSheet.create({
  title: { paddingTop: 48, paddingBottom: 22 },
});
