import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackTypes } from '../../@types/navigation';
import Illustration from '../../assets/images/illustration_bad.svg';
import { BodyM, TitleM } from '../../themes/styles';
import { colors, fonts } from '../../themes/themes';

const NoDiet = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TitleM color={colors.product.redDark} textAlign="center">
          Que pena!
        </TitleM>
        <BodyM textAlign="center">
          Você saiu da dieta dessa vez, mas continue se esforçando e não
          desista!
        </BodyM>
      </View>
      <Illustration height={288} width={244} />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Ir para a página principal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.base.gray700,
  },
  textContainer: {
    gap: 8,
    marginBottom: 44,
  },
  button: {
    marginTop: 30,
    height: 50,
    width: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.base.gray200,
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

export default NoDiet;
