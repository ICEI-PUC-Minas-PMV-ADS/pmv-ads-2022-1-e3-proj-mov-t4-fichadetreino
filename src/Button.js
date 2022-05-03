import React, { Component } from 'react';
import { StyleSheet, Pressable, Text } from 'react-native';
import styles from './Button.style';



const Button = (prop) => {

  return (
        <>
          <Pressable style={styles.buttonStyle} onPress={() => entrar()
            }>
          <Text style={styles.buttonText}>Login</Text>
          </Pressable>
        </>
      )
    }


export default Button;