
import * as React from 'react';
import {
  TouchableOpacity,
} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation} from "@react-navigation/native";


const LogoutRoute = () => {
  const logoff = ()=>{
    const auth = getAuth();
    signOut(auth).then(() => {
    navigation.navigate("Login");
    }).catch((error) => {
    });
  }

  const navigation = useNavigation();


  return(
    <TouchableOpacity onPress={logoff()}>
      Sair
    </TouchableOpacity>

  );
};
export default LogoutRoute;
