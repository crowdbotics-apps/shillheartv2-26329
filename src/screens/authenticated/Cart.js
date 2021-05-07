import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Text, useTheme } from 'react-native-elements';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import CartCardList from '../../components/CartCardList';
import CartOptions from '../../components/CartOption';
import DeliveryComponent from '../../components/DeliveryComponent';
import FixedBottomBar from '../../components/FixedBottomBar';
import PickupSelectComponent from '../../components/PickupSelectComponent';

const products = [
  {
    photoUrl:
      'https://5.imimg.com/data5/QB/SS/MY-221620/steel-rods-500x500.jpg',
    sku: 'SKU: ACA001',
    title: '#4 Dowels 2’ (50 pcs)',
    description:
      'Rebar dowels can be used for forming or as connector ties in concrete projects.',
  },
  {
    photoUrl:
      'https://5.imimg.com/data5/QB/SS/MY-221620/steel-rods-500x500.jpg',
    sku: 'SKU: ACA001',
    title: '#2 Dowels 2’ (50 pcs)',
    description:
      'Rebar dowels can be used for forming or as connector ties in concrete projects.',
  },
];

export default function CartDetails() {
  const [counter, setCounter] = useState(0);
  const [checked, setChecked] = useState(false);
  const insets = useSafeAreaInsets();
  const { theme } = useTheme();
  const styles = useStyles(insets, theme);

  const [deliveryOption, setDeliveryOption] = useState(1);

  const addItem = () => {
    setCounter(counter + 1);
  };
  const subtractItem = () => {
    if (!counter) return;
    setCounter(counter - 1);
  };
  return (
    <SafeAreaView style={styles.safeAreaContainer}>
      <View style={styles.rootContainer}>
        <ScrollView contentContainerStyle={styles.scrollViewContainer}>
          <Text style={styles.text}>Your Cart</Text>
          <CartCardList
            addItem={addItem}
            counter={counter}
            products={products}
            subtractItem={subtractItem}
          />
          <Text style={styles.addMoreItems}>Add more items</Text>
          <DeliveryComponent
            selected={deliveryOption === 1}
            onSelect={() => setDeliveryOption(1)}
          />
          <PickupSelectComponent
            selected={deliveryOption === 2}
            onSelect={() => {
              setDeliveryOption(2);
            }}
          />
        </ScrollView>
      </View>
      <FixedBottomBar itemCount={0} />
    </SafeAreaView>
  );
}

const useStyles = (insets, theme) =>
  StyleSheet.create({
    rootContainer: {
      height: Dimensions.get('screen').height - insets.top - 230,
    },
    safeAreaContainer: {
      backgroundColor: 'white',
      height: '100%',
    },
    scrollViewContainer: {
      padding: 12,
      display: 'flex',
      justifyContent: 'center',
    },
    text: {
      color: theme.colors.text,
      fontFamily: theme.fonts.semi_bold,
      fontSize: 22,
    },
    addMoreItems: {
      color: theme.colors.text,
      fontFamily: theme.fonts.semi_bold,
      fontSize: 18,
      marginTop: 16,
      alignSelf: 'center',
    },
  });
