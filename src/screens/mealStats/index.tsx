import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { StackTypes } from '../../@types/navigation';
import BigBox from '../../components/bigBox';
import CustomButtonBack from '../../components/customButtonBack';
import SmallBox from '../../components/smallBox';
import { useDietStore } from '../../store/useDietStore';
import { BodyS, TitleG, TitleXS } from '../../themes/styles';
import { colors } from '../../themes/themes';

interface TypeParams extends RouteProp<ParamListBase> {
  params: {
    percentage: string;
  };
}

const MealStats = () => {
  const [noDiet, setNoDiet] = useState(0);
  const [yesDiet, setYesDiet] = useState(0);

  const { params } = useRoute<TypeParams>();
  const navigation = useNavigation<StackTypes>();
  const { mealsRegister, meals } = useDietStore();

  useEffect(() => {
    let newDiet = 0;

    meals.filter(value => (value.isDiet === 'no' ? newDiet++ : null));
    console.log(newDiet);
    return setNoDiet(newDiet!);
  }, []);

  useEffect(() => {
    let newDiet = 0;

    meals.filter(value => (value.isDiet === 'yes' ? newDiet++ : null));
    console.log(newDiet);
    return setYesDiet(newDiet!);
  }, []);

  return (
    <View style={styles.header}>
      <CustomButtonBack navigation={() => navigation.goBack()} />

      <View style={styles.headerContainer}>
        <TitleG>{params.percentage}</TitleG>
        <BodyS color={colors.base.gray200}>das refeições dentro da dieta</BodyS>
      </View>

      <View style={styles.container}>
        <View style={{ marginBottom: 24 }}>
          <TitleXS size={'16px'}>Estatisticas gerais</TitleXS>
        </View>

        <BigBox
          title="22"
          subTitle="Melhor sequência dentro de pratos da dieta"
        />

        <BigBox
          title={String(mealsRegister)}
          subTitle="Refeições registradas"
        />

        <View style={styles.rowContainer}>
          <SmallBox
            color={colors.product.greenLight}
            title={String(yesDiet)}
            subTitle="Refeições dentro da dieta"
          />
          <SmallBox
            color={colors.product.redLight}
            title={String(noDiet)}
            subTitle="Refeições fora da dieta"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: colors.product.greenLight,
    paddingTop: 56,
  },
  headerContainer: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  container: {
    backgroundColor: colors.base.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
    width: '100%',
    marginTop: 34,
    paddingTop: 33,
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    gap: 12,
  },
});

export default MealStats;
