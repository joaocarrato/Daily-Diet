import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Icon from '../../assets/images/Icon.svg';
import Logo from '../../assets/images/logo.svg';
import AddMealButton from '../../components/addMealButton';
import Box from '../../components/box';
import MealContainer from '../../components/mealContainer';
import { BodyM, TitleS } from '../../themes/styles';

const Home = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Logo width={82} height={37} />
        <Icon width={40} height={40} />
      </View>

      <Box />

      <BodyM>Refeições</BodyM>

      <AddMealButton />

      <TitleS>12.08.22</TitleS>

      <MealContainer />
    </ScrollView>
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
