import { ArrowLeft } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../themes/themes';

type HeaderProps = {
  navigation: () => void;
};

const CustomButtonBack = ({ navigation }: HeaderProps) => {
  return (
    <TouchableOpacity onPress={navigation} style={styles.arrowButton}>
      <ArrowLeft size={26} color={colors.product.greenDark} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  arrowButton: {
    paddingHorizontal: 24,
  },
});

export default CustomButtonBack;
