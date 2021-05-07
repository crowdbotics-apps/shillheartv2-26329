import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import CartCard from './CartCard';

const CartCardList = ({ products, addItem, subtractItem, counter }) => {
  return (
    <Card containerStyle={styles.cardContainer}>
      {products.map((product, index) => (
        <Fragment key={product.title}>
          <CartCard
            addItem={addItem}
            counter={counter}
            product={product}
            subtractItem={subtractItem}
          />
          {products.length - 1 !== index && <Card.Divider />}
        </Fragment>
      ))}
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    padding: 0,
    borderRadius: 16,
    shadowColor: '#000',
    borderWidth: null,
    elevation: 1,
    shadowOpacity: 0.06,
  },
});

export default CartCardList;
