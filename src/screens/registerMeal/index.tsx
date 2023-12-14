import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { uid } from 'uid';
import { StackTypes } from '../../@types/navigation';
import CustomButtonBack from '../../components/customButtonBack';
import Input from '../../components/input';
import { useDietStore } from '../../store/useDietStore';
import { TitleS, TitleXS } from '../../themes/styles';
import { colors, fonts } from '../../themes/themes';
import { globalStyle } from './global';

const RegisterMeal = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');
  const [selected, setSelected] = useState('');

  const navigation = useNavigation<StackTypes>();

  const { addMeal, addMealsRegister } = useDietStore();

  const id = uid(10);

  const handleNavigation = (
    name: string,
    description: string,
    date: string,
    hour: string,
    selected: string,
  ) => {
    addMeal({
      id: id,
      name: name,
      description: description,
      date: date,
      hour: hour,
      isDiet: selected,
    });
    addMealsRegister();
    if (selected === 'yes') {
      return navigation.navigate('YesDiet');
    } else {
      return navigation.navigate('NoDiet');
    }
  };

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
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={text => setName(text)}
        />

        <TitleXS>Descrição</TitleXS>
        <TextInput
          style={styles.boxInput}
          multiline
          value={description}
          onChangeText={text => setDescription(text)}
        />

        <View style={styles.containerRow}>
          <View>
            <TitleXS>Data</TitleXS>
            <Input
              type="datetime"
              options={{ format: 'DD/MM/YYYY' }}
              value={date}
              onChangeText={item => setDate(item)}
            />
          </View>
          <View>
            <TitleXS>Hora</TitleXS>
            <Input
              type="datetime"
              options={{ format: 'HH:mm' }}
              value={hour}
              onChangeText={item => setHour(item)}
            />
          </View>
        </View>

        <TitleXS>Está dentro da dieta?</TitleXS>
        <View style={styles.containerRowButton}>
          <TouchableOpacity
            style={globalStyle(selected === 'yes' ? true : false).button}
            onPress={() => setSelected('yes')}>
            <View style={globalStyle().circularGreen} />
            <TitleXS>Sim</TitleXS>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setSelected('no')}
            style={globalStyle(selected === 'no' ? true : false).buttonRed}>
            <View style={globalStyle().circularRed} />
            <TitleXS>Não</TitleXS>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            handleNavigation(name, description, date, hour, selected)
          }>
          <Text style={styles.buttonText}>Cadastrar refeição</Text>
        </TouchableOpacity>
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
    paddingTop: 18,
  },
  containerRow: {
    flexDirection: 'row',
    gap: 33,
    marginTop: 24,
    marginBottom: 24,
  },
  containerRowButton: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 24,
    flex: 0.8,
  },
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

export default RegisterMeal;
