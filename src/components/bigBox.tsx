import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BodyS, TitleM } from '../themes/styles';
import { colors } from '../themes/themes';

type BoxProps = {
  title: string;
  subTitle: string;
};

const BigBox = ({ title, subTitle }: BoxProps) => {
  return (
    <View style={styles.box}>
      <TitleM>{title}</TitleM>
      <BodyS color={colors.base.gray200}>{subTitle}</BodyS>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 89,
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.base.gray600,
    padding: 16,
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
});

export default BigBox;
