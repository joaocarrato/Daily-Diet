import { ArrowUpRight } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BodyS, TitleG } from '../themes/styles';
import { colors } from '../themes/themes';

const Box = () => {
  return (
    <View style={styles.box}>
      <ArrowUpRight
        color={colors.product.greenDark}
        size={30}
        style={styles.arrowIcon}
      />
      <View style={styles.textContainer}>
        <TitleG>90,86%</TitleG>
        <BodyS color={colors.base.gray200}>das refeições dentro da dieta</BodyS>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    borderRadius: 8,
    height: 102,
    width: '100%',
    backgroundColor: colors.product.greenLight,
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 20,
    paddingHorizontal: 16,
    marginBottom: 40,
  },
  arrowIcon: {
    alignSelf: 'flex-end',
  },
  textContainer: {
    top: -10,
    alignItems: 'center',
  },
});

export default Box;
