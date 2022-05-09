import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from 'react-native-paper';

import Container from '../components/Container';
import Header from '../components/Header'
import Input from '../components/Input';

import { useNavigation } from '@react-navigation/native';

import {register} from '../services/auth.services';

const Register = () => {
  
  const navigation = useNavigation();

  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);

  const handleRegister = () => {
    
    register({
      name: name,
      email: email,
      senha: senha,
    }).then( res => {
      console.log(res);

      if(res){
        Alert.alert('Atenção','Usuário cadastrado com sucesso!');
      }else{

        Alert.alert('Atenção: Erro!','Usuário não foi cadastrado! Tente novamente mais tarde');
      }
    });
  }

  return (
    <Container>
        <Header title={'Cadastro'}/>
      <View style={styles.header}>
      </View>

        <TextInput
          label="Nome"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          label="Senha"
          value={senha}
          secureTextEntry
          onChangeText={(text) => setSenha(text)}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={handleRegister}>
          Registrar
        </Button>
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => navigation.goBack()}>
          Cancelar
        </Button>

    </Container>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
    backgroundColor: '#6974CF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    paddingHorizontal: 1,
    borderRadius: 50,
    elevation: 3,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 10,
  },
    
  header: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 12,
  },
});

export default Register;
