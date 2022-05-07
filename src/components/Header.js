import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Appbar, Text } from 'react-native-paper';


const Header = ({title, subtitle}) => {

  return (
        <>
            <Appbar.Header style = {styles.headerStyle}>
              <Appbar.Content title = {title} subtitle = {subtitle} style = {styles.contentStyle}/>
            </Appbar.Header>
        </>
    );
};

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#6974CF',
    position: 'center',
    left: 0,
    right: 0,
    bottom: 0,
  },
  contentStyle:{
    textAlign: 'right',
  }
})



export default Header;
