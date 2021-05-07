import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  EMAIL_SENT,
  FORGOT_PASSWORD,
  LOGIN,
  RESET_PASSWORD,
  SIGN_UP,
} from "../constants/route";
import Login from "../screens/unauthenticated/Login";
import Signup from "../screens/unauthenticated/Signup";
import ForgotPassword from "../screens/unauthenticated/ForgotPassword";
import ResetPassword from "../screens/unauthenticated/ResetPassword";
import EmailSent from "../screens/unauthenticated/EmailSent";
import AuthNavigator from '../screens/authenticated/AuthNavigator';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator headerMode="none" initialRouteName={LOGIN} mode="modal">
      <Stack.Screen name="Auth" component={AuthNavigator} />
      <Stack.Screen name={LOGIN} component={Login} />
      <Stack.Screen name={SIGN_UP} component={Signup} />
      <Stack.Screen name={FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={RESET_PASSWORD} component={ResetPassword} />
      <Stack.Screen name={EMAIL_SENT} component={EmailSent} />
    </Stack.Navigator>
  );
}
