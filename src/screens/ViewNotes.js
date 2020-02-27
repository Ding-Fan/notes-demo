import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {Text, FAB, List} from 'react-native-paper';

import Header from '../components/Header';

const ViewNotes = ({navigation}) => {
  const [notes, setNotes] = useState([]);

  const addNoteHandler = note => {
    note.id = notes.length + 1;
    setNotes(currentNotes => [...currentNotes, note]);
  };
  return (
    <>
      <Header titleText="Simple Note Taker" />
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>You don't have any notes. </Text>
        </View>
        <FAB
          style={styles.fab}
          small
          icon="plus"
          label="Add New Note"
          onPress={() => navigation.navigate('AddNotes')}
        />
      </View>
    </>
  );
};

export default ViewNotes;

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
  fab: {
    position: 'absolute',
    margin: 20,
    right: 0,
    bottom: 10,
  },
});
