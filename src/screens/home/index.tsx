import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { StackTypes } from '../../@types/navigation';
import Icon from '../../assets/images/Icon.svg';
import Logo from '../../assets/images/logo.svg';
import AddMealButton from '../../components/addMealButton';
import Box from '../../components/box';
import MealContainer from '../../components/mealContainer';
import { useDietStore } from '../../store/useDietStore';
import { BodyM, Gap, TitleS, TitleXS } from '../../themes/styles';

const Home = () => {
  const navigation = useNavigation<StackTypes>();
  const { meals, removeAllMeals } = useDietStore();

  const handleRemove = () => {
    Alert.alert('Confirmar ação', 'Deseja excluir todas as dietas?', [
      {
        text: 'Sim',
        onPress: removeAllMeals,
        style: 'cancel',
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo width={82} height={37} />
        <Icon width={40} height={40} />
      </View>

      <Box />

      <BodyM>Refeições</BodyM>

      <AddMealButton onPress={() => navigation.navigate('RegisterMeal')} />

      <View style={styles.rowContainer}>
        <TitleS>Dietas</TitleS>
        <TouchableOpacity onPress={handleRemove}>
          <TitleXS>Limpar todos</TitleXS>
        </TouchableOpacity>
      </View>

      <FlatList
        ListFooterComponent={<Gap />}
        data={meals}
        renderItem={({ item }) => (
          <MealContainer
            onPress={() =>
              navigation.navigate('MealDetails', {
                id: item.id,
                date: item.date,
                description: item.description,
                hour: item.hour,
                isDiet: item.isDiet,
                name: item.name,
              })
            }
            hour={item.hour}
            name={item.name}
            isDiet={item.isDiet}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 66,
    paddingHorizontal: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 33,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default Home;
