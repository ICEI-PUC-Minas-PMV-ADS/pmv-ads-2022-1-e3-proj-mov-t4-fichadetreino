import React, { Component } from 'react';
import { StyleSheet } from 'react-native';;
import { Appbar, Text } from 'react-native-paper';
import styles from './Header.style'



const Header = () => {

  return (
        <>
            <Appbar.Header style = {styles.headerStyle}>
              <Appbar.Content title="Ficha de Treino" subtitle="Puc Minas" />
            </Appbar.Header>
        </>
      )
    }


export default Header;