import React,{useState,useEffect} from "react";
import {View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView} from "react-native";
import styles from "./style";
import { getAuth, signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import {MaterialCommunityIcons} from "@expo/vector-icons"
import { Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
export default function Login (){
  const navigation =  useNavigation();
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState (false);
    const LoginFirebase = ()=>{
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

          const user = userCredential.user;
          navigation.navigate("Treinos diarios",{idUser:user.uid});
        })
      .catch((error) => {
        setError(true);
        const errorCode = error.code;
        const errorMessage = error.message;
      // ..
      });

    }

    useEffect(()=>{
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
          if (user) {

          }
        });

    },[])

    return (
      <View style={styles.container}>
      <KeyboardAvoidingView
         behavior={Platform.OS === "ios" ? "padding" : "height" }
         style={styles.container}
      >
        <Text style={styles.login}>
          Bem Vindo de Volta! &#127947;
        </Text>
      <TextInput style={styles.TextInput}
        placeholder={"Entre com seu email"}
        type="text"
        value={email}
         onChangeText={setEmail}
      />
      <TextInput style={styles.TextInput}
        placeholder={"Entre com sua senha"}
        type="text"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
       { error === true ?
        <View >
          <Text style={styles.alert}> email e/ou senha estao invalidos!
            <MaterialCommunityIcons
              name="alert-circle"
              size={20}
              color="#FF0000"
            />
          </Text>
        </View>
                    :
         <View>


         </View>
      }
      {email === "" || password === ""
          ?
            <TouchableOpacity disabled={true} style={styles.button}>
              <Text style={styles.textbutton}>Entrar</Text>
            </TouchableOpacity>

          :
            <TouchableOpacity style={styles.button}
            onPress={LoginFirebase}
            >
              <Text style={styles.textbutton}>Entrar</Text>
            </TouchableOpacity>

        }
      <TouchableOpacity style={styles.button}
        onPress={()=>{navigation.navigate("Registre-se")}}
      >
      <Text style={styles.textbutton}>Registre-se</Text>

      </TouchableOpacity>
      <View style={{height:100}}/>

    </KeyboardAvoidingView>
    </View>
  );
}
