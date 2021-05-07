import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Button, Text, useTheme } from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function FixedBottomBar({ itemCount, navigateToCart, cart }) {
  const { theme } = useTheme();
  const insets = useSafeAreaInsets();
  const styles = useStyles(insets, theme, itemCount);

  return (
    <View style={styles.bottomContainer}>
      <Text style={styles.orderText}>Order Subtotal {itemCount} items</Text>
      <Button
        title={cart ? "VIEW CART" : "COMPLETE ORDER"}
        onPress={navigateToCart}
        buttonStyle={styles.buttonStyle}
        titleStyle={styles.buttonTitleStyle}
      />
    </View>
  );
}

const useStyles = (insets, theme, itemCount) =>
  StyleSheet.create({
    bottomContainer: {
      height: 100,
      width: '100%',
      backgroundColor: 'white',
      // top: Dimensions.get('window').height - insets.top - insets.bottom - 160,
      borderTopColor: theme.colors.primary,
      borderTopWidth: itemCount ? 2 : null,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
    },
    orderText: {
      fontFamily: theme.fonts.semi_bold
    },
    buttonStyle: {
      borderRadius: 100,
      width: Dimensions.get('window').width - 100,
      height: 54,
    },
    buttonTitleStyle: {
      fontFamily: theme.fonts.semi_bold
    }
  });
