import React from 'react';
import { StyleSheet, View } from 'react-native';
import { BodyS, TitleM } from '../themes/styles';
import { colors } from '../themes/themes';

type BoxProps = {
  title: string;
  subTitle: string;
  color: string;
};

const SmallBox = ({ title, subTitle, color }: BoxProps) => {
  return (
    <View style={styles(color).box}>
      <TitleM>{title}</TitleM>
      <BodyS color={colors.base.gray200} textAlign="center">
        {subTitle}
      </BodyS>
    </View>
  );
};

const styles = (color: string) =>
  StyleSheet.create({
    box: {
      flex: 1,
      height: 107,
      borderRadius: 8,
      backgroundColor: color,
      padding: 16,
      alignItems: 'center',
      gap: 8,
      marginBottom: 12,
    },
  });

export default SmallBox;
