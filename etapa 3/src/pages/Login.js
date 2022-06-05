import React, { useState } from 'react';
import { StyleSheet, View, Alert, Text, TextInput} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button, Headline } from 'react-native-paper';

import Container from '../components/Container';
import Input from '../components/Input';
import Header from '../components/Header'

import { useNavigation } from '@react-navigation/native';
import { useUser } from '../contexts/UserContext';

import {login} from '../services/auth.services';

const Login = () => {
  const navigation = useNavigation();
  const { setSigned, setName } = useUser();

  const [usuario, setUsuario] = useState(null);
  const [senha, setSenha] = useState(null);

   const handleLogin= () => {

    login({
      usuario: usuario,
      password: senha
    }).then( res => {
      console.log('res: ',res);

      if(res && res.user){
        setSigned(true);
        setName(res.user.name);
        AsyncStorage.setItem('@TOKEN_KEY', res.accessToken).then();
      }else{
        console.log('Error: ');
        Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }

    });
    
  }

  return (
    <Container>
        <Header title={'Login'}/>
      <View style={styles.header}>
      </View>
      <Text style={styles.headerText}>Bem Vindo de Volta!</Text>
        <Input
          label="Usuário"
          placeholder="Login"
          value={usuario}
          onChangeText={(text) => setUsuario(text)}
        />
        <Input
          label="Senha"
          placeholder="Senha"
          value={senha}
          secureTextEntry
          onChangeText={(text) => setSenha(text)}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleLogin}>
          Login
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.navigate('Register')}>
          Registrar
        </Button>
    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 0,
    backgroundColor: '#6974CF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 1,
    borderRadius: 50,
    elevation: 10,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 70,
  },
  header: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 12,
  },
  headerText: {
    fontSize: 18,
    lineHeight: 30,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#6974CF',
    alignSelf: 'center',
    marginTop: 28,
  },
});

export default Login;
