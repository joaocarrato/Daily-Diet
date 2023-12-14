import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { PencilSimpleLine, Trash } from 'phosphor-react-native';
import React from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackTypes } from '../../@types/navigation';
import CustomButtonBack from '../../components/customButtonBack';
import { useDietStore } from '../../store/useDietStore';
import {
  BodyM,
  BodyS,
  GreenCircular,
  RedCircular,
  TitleM,
  TitleS,
  TitleXS,
} from '../../themes/styles';
import { colors, fonts } from '../../themes/themes';

interface TypeParams extends RouteProp<ParamListBase> {
  params: {
    id: string;
    name: string;
    hour: string;
    date: string;
    description: string | undefined;
    isDiet: string;
  };
}

const MealDetails = () => {
  const navigation = useNavigation<StackTypes>();
  const { params } = useRoute<TypeParams>();
  console.log(params);

  const { removeMeal } = useDietStore();

  const handleRemove = (id: string) => {
    removeMeal(id);
    navigation.goBack();
    Alert.alert('Refeição removida com sucesso');
  };

  return (
    <View style={styles.header}>
      <View style={styles.headerContainer}>
        <CustomButtonBack
          navigation={() => navigation.goBack()}
          color={colors.base.gray200}
        />
        <TitleS>Refeição</TitleS>
      </View>

      <View style={styles.container}>
        <View style={{ gap: 8, marginBottom: 24 }}>
          <TitleM>{params.name}</TitleM>
          <BodyM color={colors.base.gray200}>{params.description}</BodyM>
        </View>

        <View style={{ gap: 8, marginBottom: 24 }}>
          <TitleXS>Data e hora</TitleXS>
          <BodyM color={colors.base.gray200}>
            {params.date} às {params.hour}{' '}
          </BodyM>
        </View>

        <View style={styles.card}>
          {params.isDiet === 'yes' ? (
            <>
              <GreenCircular />
              <BodyS>dentro da dieta</BodyS>
            </>
          ) : (
            <>
              <RedCircular />
              <BodyS>fora da dieta</BodyS>
            </>
          )}
        </View>

        <TouchableOpacity style={styles.button}>
          <PencilSimpleLine color="white" />
          <Text style={styles.buttonText}>Editar refeição</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.buttonOutline}
          onPress={() => handleRemove(params.id)}>
          <Trash color="black" />
          <Text style={styles.buttonTextOutline}>Excluir refeição</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: colors.product.greenLight,
    paddingTop: 60,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 85,
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
  },
  buttonOutline: {
    marginTop: 8,
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.base.gray100,
    flexDirection: 'row',
    gap: 12,
    borderRadius: 6,
    marginBottom: 32,
  },
  buttonTextOutline: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.base.gray100,
    fontFamily: fonts.bold,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.base.white,
    fontFamily: fonts.bold,
  },
  card: {
    flexDirection: 'row',
    gap: 8,
    height: 40,
    width: 144,
    backgroundColor: colors.base.gray600,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 10000,
    marginBottom: '90%',
  },
});

export default MealDetails;
