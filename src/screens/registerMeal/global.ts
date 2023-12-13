import { StyleSheet } from 'react-native';
import { colors } from '../../themes/themes';

export const globalStyle = (selected?: boolean) =>
  StyleSheet.create({
    button: {
      flex: 1,
      height: 50,
      backgroundColor: selected
        ? colors.product.greenLight
        : colors.base.gray600,
      borderWidth: selected ? 1 : 0,
      borderColor: selected ? colors.product.greenDark : 'transparent',
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 8,
    },
    buttonRed: {
      flex: 1,
      height: 50,
      backgroundColor: selected ? colors.product.redLight : colors.base.gray600,
      borderWidth: selected ? 1 : 0,
      borderColor: selected ? colors.product.redDark : 'transparent',
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 8,
    },
    circularGreen: {
      height: 10,
      width: 10,
      borderRadius: 999,
      backgroundColor: colors.product.greenDark,
    },
    circularRed: {
      height: 10,
      width: 10,
      borderRadius: 999,
      backgroundColor: colors.product.redDark,
    },
  });
