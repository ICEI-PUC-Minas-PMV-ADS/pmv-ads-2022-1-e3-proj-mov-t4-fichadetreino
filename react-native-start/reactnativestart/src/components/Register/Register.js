import React,{useState} from "react";
import {View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import styles from "./styles";


export default function Login (){
  const navigation =  useNavigation();
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const [error,setError]= useState('');

  const register =()=>{
    const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

          const user = userCredential.user;
          navigation.goBack();
        })
      .catch((error) => {
        setError(true);
        const errorCode = error.code;
        const errorMessage = error.message;
      // ..
      });
  }
  return (
    <View style={styles.container}>
    <KeyboardAvoidingView
       behavior={Platform.OS === "ios" ? "padding" : "height" }
       style={styles.container}
    >
      <Text style={styles.login}>
        Registre-se! &#128257;
      </Text>
    <TextInput style={styles.TextInput}
      placeholder={"Digite seu email"}
      type="text"
      value={email}
       onChangeText={setEmail}
    />
    <TextInput style={styles.TextInput}
      placeholder={"Digite sua senha"}
      type="text"
      secureTextEntry={true}
      value={password}
      onChangeText={setPassword}
    />
     {email === "" || password === ""
          ?
            <TouchableOpacity disabled={true} style={styles.button}>
              <Text style={styles.textbutton}>Registrar</Text>
            </TouchableOpacity>

          :
            <TouchableOpacity style={styles.button}
            onPress={register}
            >
              <Text style={styles.textbutton}>Registrar</Text>
            </TouchableOpacity>

      }
      <TouchableOpacity style={styles.button}
        onPress={()=>{navigation.navigate("Login")}}
      >
      <Text style={styles.textbutton}>Ja possui conta?</Text>

      </TouchableOpacity>
      <View style={{height:100}}/>
     </KeyboardAvoidingView>
    </View>
  );
}
