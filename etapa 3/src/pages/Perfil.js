import React from 'react';
import { FlatList, View, StyleSheet, Button, Alert } from 'react-native';
import { Text, List,  } from 'react-native-paper';

import Header from '../components/Header';
import Container from '../components/Container';

import { useNavigation } from '@react-navigation/native';


const Perfil = () => {

  return (
    <>    
    <Container>
      <Header title={'Perfil'} subtitle ={'Veja seu Perfil'}/>    
          <Text style = {styles.text}> Nome: Fulano da Silva </Text>
          <Text style = {styles.text}> E-mail: FulanodaSilva@email.com.br </Text>
          <Text style = {styles.text}> Treinador: João Silva </Text>

      <View style={styles.fixToText}>
        <Button
          color = '#6974CF'
          title="Alterar Senha"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          color = '#6974CF'
          title="Editar Informações"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </Container>
    </>
  );
};

export default Perfil;

const styles = StyleSheet.create({
  text :{
    textAlign: 'center',
    margin: 8,
    fontSize: 16,
    marginBottom: 8,
    marginTop: 15,
    color: '#696969',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#A020F0',
  },
});