import React from 'react';
import {View, StyleSheet, Text, Pressable, TextInput} from 'react-native';


const Input = (props) => {
  return (
    <TextInput style={styles.TextInput} {...props} />
  );
};

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: '#d3d3d3',
    height: 10,
    margin: 8,
    marginTop: 30 ,
    borderWidth: 0,
    borderRadius: 14 ,
    padding: 20,
    marginBottom: 0,
    alignContent: 'center'
  },
  
});

export default Input;
