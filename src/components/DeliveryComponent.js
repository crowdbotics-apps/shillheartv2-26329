import React from 'react';
import { View } from 'react-native';
import { Icon, Text, Divider } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CartOptions from './CartOption';

const list = [
  {
    title: 'Delivery Location',
    icon: 'place',
  },
  {
    title: 'Specific Date and Time',
    icon: 'schedule',
  },
];

export default function DeliveryComponent({ selected, onSelect }) {
  return (
    <View style={{ marginBottom: 8 }}>
      <TouchableOpacity
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 8,
          padding: 12,
        }}
        onPress={onSelect}
      >
        <Text h3>Delivery</Text>
        <Icon name={selected ? 'radio-button-on' : 'radio-button-off'} />
      </TouchableOpacity>
      <Divider />
      {selected ? <CartOptions list={list} /> : null}
    </View>
  );
}
