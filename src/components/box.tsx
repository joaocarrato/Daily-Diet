import { useNavigation } from '@react-navigation/native';
import { ArrowUpRight } from 'phosphor-react-native';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { StackTypes } from '../@types/navigation';
import { BodyS, TitleG } from '../themes/styles';
import { colors } from '../themes/themes';

const Box = () => {
  const [percentage, setPercentage] = useState<string>('90,86%');
  const navigation = useNavigation<StackTypes>();

  return (
    <TouchableOpacity
      style={styles.box}
      onPress={() => navigation.navigate('MealStats', { percentage })}>
      <ArrowUpRight
        color={colors.product.greenDark}
        size={30}
        style={styles.arrowIcon}
      />
      <View style={styles.textContainer}>
        <TitleG>{percentage}</TitleG>
        <BodyS color={colors.base.gray200}>das refeições dentro da dieta</BodyS>
      </View>
    </TouchableOpacity>
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
