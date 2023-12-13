import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  BodyM,
  BodyXS,
  GreenCircular,
  RedCircular,
  VerticalDivider,
} from '../themes/styles';
import { colors } from '../themes/themes';

type MealContainerProps = {
  hour: string;
  name: string;
  isDiet: string;
};

const MealContainer = ({ hour, name, isDiet }: MealContainerProps) => {
  return (
    <View style={styles.mealContainer}>
      <View style={styles.hourInfo}>
        <BodyXS>{hour}</BodyXS>
        <VerticalDivider />
        <BodyM color={colors.base.gray200}>{name}</BodyM>
      </View>

      {isDiet === 'yes' ? <GreenCircular /> : <RedCircular />}
    </View>
  );
};

const styles = StyleSheet.create({
  mealContainer: {
    marginTop: 8,
    width: '100%',
    height: 50,
    borderWidth: 1.5,
    borderColor: colors.base.gray500,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  hourInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
});

export default MealContainer;
