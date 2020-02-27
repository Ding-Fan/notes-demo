import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, TextInput, FAB} from 'react-native-paper';

import Header from '../components/Header';

const AddNotes = () => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteValue, setNoteValue] = useState('');
  return (
    <>
      <Header titleText="New Note" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Add Notes modal screen</Text>
        </View>
      </View>
    </>
  );
};

export default AddNotes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  titleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 20,
  },
});
