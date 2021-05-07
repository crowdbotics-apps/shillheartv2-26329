import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Image } from 'react-native';
import { Icon, useTheme } from 'react-native-elements';
import { CART, PRODUCT_CATALOG } from '../../constants/route';
import CartDetails from '../../screens/authenticated/Cart';
import ProductCatalog from '../../screens/authenticated/ProductCatalog';

const Stack = createStackNavigator();

export default function AuthNavigator() {
  const { theme } = useTheme();
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeftContainerStyle: { padding: 12 },
        headerTitleContainerStyle: { padding: 12 },
        headerTitle: (props) => (
          <Image
            source={require('../../../assets/logo.png')}
            style={{ width: 200, height: 100, resizeMode: 'contain' }}
          />
        ),
      }}
    >
      <Stack.Screen
        options={{
          headerLeft: () => <Icon name="menu" color={theme.colors.primary} />,
        }}
        name={PRODUCT_CATALOG}
        component={ProductCatalog}
      />
      <Stack.Screen name={CART} component={CartDetails} />
    </Stack.Navigator>
  );
}
