import { Plus } from 'phosphor-react-native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors, fonts } from '../themes/themes';

type MealButtonProps = {
  onPress: () => void;
};

const AddMealButton = ({ onPress }: MealButtonProps) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Plus size={18} color={colors.base.white} weight={'bold'} />
      <Text style={styles.buttonText}>Nova refeição</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 8,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.base.gray200,
    flexDirection: 'row',
    gap: 12,
    borderRadius: 6,
    marginBottom: 32,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.base.white,
    fontFamily: fonts.bold,
  },
});

export default AddMealButton;
