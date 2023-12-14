import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { uid } from 'uid';
import { z } from 'zod';
import { StackTypes } from '../../@types/navigation';
import CustomButtonBack from '../../components/customButtonBack';
import Input from '../../components/input';
import { useDietStore } from '../../store/useDietStore';
import { BodyS, TitleS, TitleXS } from '../../themes/styles';
import { colors, fonts } from '../../themes/themes';
import { globalStyle } from './global';

const schema = z
  .object({
    name: z
      .string()
      .trim()
      .refine(value => value.length > 1, 'Campo obrigatório'),
    description: z
      .string()
      .trim()
      .refine(value => value.length > 4, 'Campo obrigatório'),
    date: z.string().trim().min(10, 'Formato de data inválido'),
    hour: z.string().trim().min(5, 'Formato de hora inválido'),
  })
  .required();

type RegisterMealProps = z.infer<typeof schema>;

const RegisterMeal = () => {
  const [selected, setSelected] = useState('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterMealProps>({
    resolver: zodResolver(schema),
  });

  const navigation = useNavigation<StackTypes>();

  const { addMeal, addMealsRegister } = useDietStore();

  const id = uid(10);

  const onSubmit = (data: RegisterMealProps) => {
    addMeal({
      id: id,
      name: data.name,
      description: data.description,
      date: data.date,
      hour: data.hour,
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
        {errors.name && (
          <BodyS color={colors.product.redDark}>Campo requerido</BodyS>
        )}
        <Controller
          control={control}
          name="name"
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        <TitleXS>Descrição</TitleXS>
        {errors.description && (
          <BodyS color={colors.product.redDark}>Campo requerido</BodyS>
        )}
        <Controller
          control={control}
          name="description"
          render={({ field: { value, onChange } }) => (
            <TextInput
              style={styles.boxInput}
              multiline
              value={value}
              onChangeText={onChange}
            />
          )}
        />

        <View style={styles.containerRow}>
          <View>
            <TitleXS>Data</TitleXS>
            {errors.date && (
              <BodyS color={colors.product.redDark}>Campo requerido</BodyS>
            )}
            <Controller
              control={control}
              name="date"
              render={({ field: { value, onChange } }) => (
                <Input
                  type="datetime"
                  options={{ format: 'DD/MM/YYYY' }}
                  value={value}
                  onChangeText={onChange}
                />
              )}
            />
          </View>
          <View>
            <TitleXS>Hora</TitleXS>
            {errors.hour && (
              <BodyS color={colors.product.redDark}>Campo requerido</BodyS>
            )}
            <Controller
              control={control}
              name="hour"
              render={({ field: { value, onChange } }) => (
                <Input
                  type="datetime"
                  options={{ format: 'HH:mm' }}
                  value={value}
                  onChangeText={onChange}
                />
              )}
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
          disabled={selected === '' ? true : false}
          style={[
            styles.button,
            {
              backgroundColor:
                selected === '' ? colors.base.gray400 : colors.base.gray200,
            },
          ]}
          onPress={handleSubmit(onSubmit)}>
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
    padding: 12,
    paddingTop: 14,
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
