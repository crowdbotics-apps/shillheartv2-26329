import React from 'react';
import { View } from 'react-native';
import { Icon, Text, useTheme } from 'react-native-elements';
import { Divider } from 'react-native-elements/dist/divider/Divider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';

export default function PickupSelectComponent({ selected, onSelect }) {
  const { theme } = useTheme();
  return (
    <View>
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
        <Text h3>Pickup</Text>
        <Icon name={selected ? 'radio-button-on' : 'radio-button-off'} />
      </TouchableOpacity>
      {selected ? (
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          style={{
            placeholder: {
              fontFamily: theme.fonts.regular,
              color: 'black',
            },
          }}
          placeholder={{
            value: '',
            label: 'Select store',
          }}
          items={[
            { label: 'California', value: 'California' },
            { label: 'Texas', value: 'Texas' },
          ]}
        />
      ) : null}
    </View>
  );
}
