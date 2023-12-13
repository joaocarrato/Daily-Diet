import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackTypes } from '../../@types/navigation';
import Illustration from '../../assets/images/illustration_success.svg';
import { BodyM, TitleM, TitleXS } from '../../themes/styles';
import { colors, fonts } from '../../themes/themes';

const YesDiet = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <TitleM color={colors.product.greenDark} textAlign="center">
          Continue assim!
        </TitleM>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <BodyM>Você continua </BodyM>
          <TitleXS size="16px">dentro da dieta. </TitleXS>
          <BodyM>Muito bem! </BodyM>
        </View>
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

export default YesDiet;
