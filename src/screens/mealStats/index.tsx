import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import React from 'react';
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
  const { params } = useRoute<TypeParams>();
  const navigation = useNavigation<StackTypes>();
  const { mealsRegister } = useDietStore();

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

        <BigBox title="109" subTitle="Refeições registradas" />

        <View style={styles.rowContainer}>
          <SmallBox
            color={colors.product.greenLight}
            title={String(mealsRegister)}
            subTitle="Refeições dentro da dieta"
          />
          <SmallBox
            color={colors.product.redLight}
            title="10"
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
