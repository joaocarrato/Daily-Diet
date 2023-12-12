import React from 'react';
import { StyleSheet } from 'react-native';
import {
  TextInputMask,
  TextInputMaskOptionProp,
  TextInputMaskTypeProp,
} from 'react-native-masked-text';
import { colors } from '../themes/themes';

interface InputProps {
  options?: TextInputMaskOptionProp | undefined;
  type: TextInputMaskTypeProp;
  value: string;
  onChangeText: (text: string) => void;
}

const Input = ({ options, type, value, onChangeText }: InputProps) => {
  return (
    <>
      <TextInputMask
        type={type}
        options={options}
        style={styles.smallInput}
        value={value}
        onChangeText={onChangeText}
      />
    </>
  );
};

const styles = StyleSheet.create({
  smallInput: {
    height: 50,
    width: 155,
    borderWidth: 1,
    borderColor: colors.base.gray500,
    marginTop: 4,
    borderRadius: 8,
    alignItems: 'center',
    padding: 14,
    marginBottom: 24,
  },
});

export default Input;
