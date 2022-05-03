import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable, TextInput} from 'react-native';

import Header from './components/Header'
import Button from './components/Button'

const App = () => {

  const [nome, setNome] = useState(null);
  const [senha, setSenha] = useState(null);
  const [email, setEmail] = useState(null);

  const entrar = () => {
    console.log("entrou")
    console.log(nome)
    console.log(senha)
  }


  return (
    <>
    <View style={styles.container}>

      <Header/>
      <Text style={styles.headerText}>Crie sua Conta</Text>

      <TextInput
      style={styles.textInputNome}
      label="Usuário"
      placeholder="Nome"
      value={nome}
      keyboardType="string"
      onChangeText={text => setNome(text)}
      />
      <TextInput
      style={styles.textInputEmail}
      label="Email"
      placeholder="Email"
      value={email}
      keyboardType="string"
      onChangeText={text => setEmail(text)}
      />
      <TextInput
      style={styles.textInputSenha}
      label="Senha"
      placeholder="senha"
      value={senha}
      onChangeText={text => setSenha(text)}
      secureTextEntry={true}
      />  
      
      <Text href = "" style = {{marginTop: 0, alignSelf: 'center', textDecorationLine: 'underline'}}>Esqueceu sua senha?</Text>

      <Button/>
      <Text style = {{marginTop: 10, alignSelf: 'center',}}>Ainda não tem uma conta?</Text>
      <Text href = "" style = {{marginTop: 5, alignSelf: 'center',textDecorationLine: 'underline', color: '#6974CF'}}>Cadastrar</Text>

    </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgraundColor: '#55555',
    alignContent: 'center'
  },
  textInputNome:{
    height: 48,
    margin: 12,
    marginTop: 100 ,
    borderWidth: 0,
    padding: 15,
    borderRadius: 14 ,
    backgroundColor: '#F7F8F8',
    alignContent: 'center'
  },
  textInputEmail:{
    height: 48,
    margin: 12,
    marginTop: 5 ,
    borderWidth: 0,
    padding: 15,
    borderRadius: 14 ,
    backgroundColor: '#F7F8F8',
    alignContent: 'center'
  },
  textInputSenha:{
    height: 48,
    margin: 12,
    marginTop: 5,
    borderWidth: 0,
    padding: 15,
    borderRadius: 14 ,
    backgroundColor: '#F7F8F8',
    alignContent: 'center'
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


export default App;
