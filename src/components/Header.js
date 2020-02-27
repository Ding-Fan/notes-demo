import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Title} from 'react-native-paper';

const Header = ({titleText}) => {
  return (
    <Appbar.Header style={styles.headerContainer}>
      <View style={styles.container}>
        <Title style={styles.title}>{titleText}</Title>
      </View>
    </Appbar.Header>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#60DBC5',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#2E7166',
  },
});
