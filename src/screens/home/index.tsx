import React from 'react';
import { StyleSheet, View } from 'react-native';
import Logo from '../../assets/images/logo.svg';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Logo width={82} height={37} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 66,
    paddingHorizontal: 24,
  },
  header: {},
});

export default Home;
