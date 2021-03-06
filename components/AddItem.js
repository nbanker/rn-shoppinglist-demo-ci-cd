import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const AddItem = ({title, addItem}) => {
  const [text, setText] = useState('');

  const onChange = textValue => {
    setText(textValue);
  };

  return (
    <View style>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder="Add Item..."
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Icon name="plus" size={20} color="darkslateblue" padding={2} />
        <Text style={styles.btnText}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: '#c2bad8',
    padding: 9,
    margin: 5,
  },
  btnText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default AddItem;
