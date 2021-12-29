import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import uuid from 'react-native-uuid';
import Header from './components/Header';
import ListItem from './components/ListItem';
import AddItem from './components/AddItem';

const App = () => {
  const [items, setItems] = useState([
    {id: uuid.v4(), text: 'Milk'},
    {id: uuid.v4(), text: 'Eggs'},
    {id: uuid.v4(), text: 'Tissue'},
    {id: uuid.v4(), text: 'Bread'},
  ]);

  const addItem = text => {
    if (!text) {
      Alert.alert('Error', 'Please enter an item', [
        {text: 'Ok', onPress: () => console.log('Ok Pressed')},
      ]);
    } else {
      setItems(prevItems => {
        return [{id: uuid.v4(), text}, ...prevItems];
      });
    }
  };

  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
  },
  text: {
    fontSize: 30,
  },
  button: {
    backgroundColor: '#ddd',
    padding: 10,
    margin: 20,
  },
  buttonText: {
    fontSize: 20,
  },
  img: {
    width: 500,
    height: 500,
  },
});

export default App;
