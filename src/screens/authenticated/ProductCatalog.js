import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Image, Text, useTheme } from 'react-native-elements';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import CommonCard from '../../components/CommonCard';
import FixedBottomBar from '../../components/FixedBottomBar';
import { CART } from '../../constants/route';
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

export default function ProductCatalog() {
  const [counter, setCounter] = useState(0);
  const [checked, setChecked] = useState(false);
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const { theme } = useTheme();
  const styles = useStyles(theme);

  const addItem = () => {
    setCounter(counter + 1);
  };
  const subtractItem = () => {
    if (!counter) return;
    setCounter(counter - 1);
  };
  return (
    <SafeAreaView style={{ backgroundColor: 'white' }}>
      <Image source={{ uri: '../../../assets/logo.png' }} />
      <View
        style={{
          height: Dimensions.get('screen').height - insets.top - 170 - 60,
        }}
      >
        <ScrollView
          contentContainerStyle={{
            padding: 12,
            flexGrow: 1,
          }}
        >
          <Text style={styles.orderText}>Create Your Order</Text>
          <CommonCard
            addItem={addItem}
            subtractItem={subtractItem}
            counter={counter}
            product={products[0]}
          />
          <CommonCard
            addItem={addItem}
            subtractItem={subtractItem}
            counter={counter}
            product={products[0]}
          />
          <CommonCard
            addItem={addItem}
            subtractItem={subtractItem}
            counter={counter}
            product={products[0]}
          />
        </ScrollView>
      </View>
      <FixedBottomBar
        cart
        itemCount={0}
        navigateToCart={() => navigation.navigate(CART)}
      />
    </SafeAreaView>
  );
}

const useStyles = (theme) =>
  StyleSheet.create({
    orderText: {
      color: theme.colors.text,
      fontSize: 22,
      fontFamily: theme.fonts.semi_bold,
    },
  });
