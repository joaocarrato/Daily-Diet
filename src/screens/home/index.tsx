import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { StackTypes } from '../../@types/navigation';
import Icon from '../../assets/images/Icon.svg';
import Logo from '../../assets/images/logo.svg';
import AddMealButton from '../../components/addMealButton';
import Box from '../../components/box';
import MealContainer from '../../components/mealContainer';
import { useDietStore } from '../../store/useDietStore';
import { BodyM, TitleS } from '../../themes/styles';

const Home = () => {
  const navigation = useNavigation<StackTypes>();
  const { meals } = useDietStore();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo width={82} height={37} />
        <Icon width={40} height={40} />
      </View>

      <Box />

      <BodyM>Refeições</BodyM>

      <AddMealButton onPress={() => navigation.navigate('RegisterMeal')} />

      <TitleS>12.08.22</TitleS>

      <FlatList
        data={meals}
        renderItem={({ item }) => (
          <MealContainer
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
});

export default Home;
