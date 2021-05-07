import React from 'react';
import { View } from 'react-native';
import { ListItem, Icon, useTheme } from 'react-native-elements';

const CartOptions = ({ list }) => {
  const { theme } = useTheme();
  return (
    <View style={{ width: '100%' }}>
      {list.map((item, i) => (
        <ListItem
          containerStyle={{ paddingVertical: 24, paddingHorizontal: 12 }}
          key={i}
          bottomDivider
        >
          <Icon color={theme.colors.primary} size={30} name={item.icon} />
          <ListItem.Content>
            <ListItem.Title
              style={{
                color: theme.colors.primary,
                fontFamily: theme.fonts.semi_bold,
              }}
            >
              {item.title}
            </ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron
            iconStyle={{
              fontSize: 24,
              fontWeight: 'bold',
              color: theme.colors.primary,
            }}
          />
        </ListItem>
      ))}
    </View>
  );
};

export default CartOptions;
