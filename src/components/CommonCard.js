import React from 'react';
import { Text, Icon, useTheme, Image, Card } from 'react-native-elements';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { fonts } from 'react-native-elements/dist/config';

const CommonCard = ({ product, addItem, counter, subtractItem }) => {
  const {theme} = useTheme();
  const styles = useStyles(theme, counter);
  return (
    <Card containerStyle={styles.root}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: product.photoUrl,
          }}
          style={styles.image}
        />
        <View style={styles.textContainer}>
          <Text style={styles.label}>{product.sku}</Text>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.subtitle}>{product.description}</Text>
        </View>
      </View>
      <View style={styles.actionContainer}>
        <TouchableOpacity onPress={addItem} style={styles.addItem}>
          <Icon name="add" color="white" size={24} />
        </TouchableOpacity>
        <View style={styles.counterContainer}>
          <Text style={styles.counterText}>{counter}</Text>
        </View>
        <TouchableOpacity onPress={subtractItem} style={styles.subtractItem}>
          <Icon color="white" name="remove" size={24} />
        </TouchableOpacity>
      </View>
    </Card>
  );
};

export default CommonCard;

const useStyles = (theme, counter) =>
  StyleSheet.create({
    image: {
      height: 76,
      width: 85,
    },
    root: {
      borderColor: '#27235C',
      shadowRadius: 2,
      elevation: 4,
      shadowOffset: {height: 2, width: 2},
      shadowOpacity: 0.2,
      borderWidth: 0,
      height: 180,
      borderRadius: 16,
      padding: 0,
    },
    imageContainer: {
      height: 120,
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 12,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    },
    addItem: {
      width: '35%',
      backgroundColor: '#27235C',
      borderBottomLeftRadius: 16,
      alignItems: 'center',
    },
    textContainer: { padding: 12, flexShrink: 1 },
    label: { fontSize: 10, fontFamily: theme.fonts.light },
    title: { fontSize: 14, fontFamily: theme.fonts.semi_bold },
    subtitle: { fontSize: 12, fontFamily: theme.fonts.regular },

    actionContainer: {
      display: 'flex',
      flexDirection: 'row',
      height: 60,
      alignItems: 'center',
      backgroundColor: '#27235C',
      borderBottomRightRadius: 16,
      borderBottomLeftRadius: 16,
    },
    subtractItem: {
      width: '35%',
      backgroundColor: '#27235C',
      borderBottomRightRadius: 16,
      alignItems: 'center',
    },
    counterText: { fontSize: 24, textAlign: 'center', color: 'white' },
    counterContainer: {
      width: '30%',
      height: '100%',
      justifyContent: 'center',
      backgroundColor: counter ? '#CC2228' : '#3B3877',
      textAlign: 'center',
    },
  });
