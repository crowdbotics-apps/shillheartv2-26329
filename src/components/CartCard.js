import React from 'react';
import { Text, Icon, useTheme, Image } from 'react-native-elements';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

const CartCard = ({ product, addItem, counter, subtractItem }) => {
  const { theme } = useTheme();
  const styles = useStyles(theme, counter);
  return (
    <View containerStyle={styles.root}>
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => console.log('remove')}>
          <Icon
            name="close"
            color="#27235C"
            style={styles.removeIcon}
            size={15}
          />
        </TouchableOpacity>
        <Image
          source={{
            uri: product.photoUrl,
          }}
          style={styles.image}
        />

        <View style={styles.textContainer}>
          <Text style={styles.label}>{product.sku}</Text>
          <Text style={styles.title}>{product.title}</Text>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity onPress={subtractItem}>
            <Icon name="remove" size={24} />
          </TouchableOpacity>
          <Text style={styles.counterText}>{counter}</Text>
          <TouchableOpacity onPress={addItem}>
            <Icon name="add" size={24} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartCard;

const useStyles = (theme, counter) =>
  StyleSheet.create({
    image: {
      height: 50,
      width: 56,
    },
    removeIcon: { opacity: 0.5, paddingRight: 8 },
    imageContainer: {
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 12,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
    textContainer: { padding: 12, flexShrink: 1 },
    label: { fontSize: 10, fontFamily: theme.fonts.light },
    title: { fontSize: 14, fontFamily: theme.fonts.semi_bold },
    subtitle: { fontSize: 12, fontFamily: theme.fonts.regular },
    actionContainer: {
      display: 'flex',
      flexDirection: 'row',
      width: 80,
      justifyContent: 'space-between',
    },
  });
