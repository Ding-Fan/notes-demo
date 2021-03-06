import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {IconButton, TextInput, FAB} from 'react-native-paper';

import Header from '../components/Header';

const AddNotes = ({navigation}) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteValue, setNoteValue] = useState('');

  const onSaveNoteHandler = () => {
    navigation.state.params.addNoteHandler({noteTitle, noteValue});
    navigation.goBack();
  };
  return (
    <>
      <Header titleText="New Note" />
      <IconButton
        icon="close"
        size={25}
        color="white"
        onPress={() => navigation.goBack()}
        style={styles.iconButton}
      />
      <View style={styles.container}>
        <TextInput
          label="Add Title Here"
          value={noteTitle}
          mode="outlined"
          onChangeText={setNoteTitle}
          style={styles.title}
        />
        <TextInput
          label="Add Note Here"
          value={noteValue}
          onChangeText={setNoteValue}
          mode="flat"
          multiline={true}
          style={styles.text}
          scrollEnabled={true}
          returnKeyType="done"
          blurOnSubmit={true}
        />
        <FAB
          style={styles.fab}
          small
          icon="check"
          disabled={!noteTitle.trim().length}
          onPress={() => onSaveNoteHandler()}
        />
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
  iconButton: {
    backgroundColor: 'rgba(46, 113, 102, 0.8)',
    position: 'absolute',
    right: 0,
    top: 40,
    margin: 10,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  text: {
    height: 300,
    fontSize: 16,
  },
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 0,
  },
});
