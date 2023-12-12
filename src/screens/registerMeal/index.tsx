import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { StackTypes } from '../../@types/navigation';
import CustomButtonBack from '../../components/customButtonBack';
import { TitleS, TitleXS } from '../../themes/styles';
import { colors } from '../../themes/themes';

const RegisterMeal = () => {
  const navigation = useNavigation<StackTypes>();

  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <CustomButtonBack
          navigation={() => navigation.goBack()}
          color={colors.base.gray200}
        />
        <TitleS>Nova Refeição</TitleS>
      </View>

      <View style={styles.container}>
        <TitleXS>Nome</TitleXS>
        <TextInput style={styles.input} />

        <TitleXS>Descrição</TitleXS>
        <TextInput style={styles.boxInput} multiline />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: colors.base.gray400,
    paddingTop: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 60,
  },
  container: {
    backgroundColor: colors.base.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    width: '100%',
    marginTop: 34,
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  input: {
    height: 48,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.base.gray500,
    marginTop: 4,
    borderRadius: 8,
    alignItems: 'center',
    padding: 14,
    marginBottom: 24,
  },
  boxInput: {
    height: 127,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.base.gray500,
    marginTop: 4,
    borderRadius: 8,
    padding: 14,
  },
});

export default RegisterMeal;
