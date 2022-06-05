import React from "react";
import {View,Text,TouchableOpacity,Share} from "react-native";
import styles from "./style";
// Essa desestruturacao eu fiz para tirar do parametro PROPS
// que foi passado no formulario
const ResultImc=({resultadoIMC,valorIMC})=>{
  const onShare= async ()=>{
    const result = await Share.share({
      message:`Meu imc e :  ${valorIMC}`
    })
  }




  return(
    <View style={styles.resultImc}>
        {/* TERNARIO ABAIXO */}
        {valorIMC != null ?
        <View style={styles.boxSharedButton}>
        <TouchableOpacity
        onPress={
          // func de compartilhar la em cima esta pegando mas so no
          //celular
       onShare()
        }
        style={styles.shared}
        >
          <Text style={styles.sharedText}>Compartilhar!</Text>
        </TouchableOpacity>
        </View>
          :
          <View></View>
          }

          {/* FIm do ternario */}
      <Text style={styles.information}>
      {resultadoIMC}
      </Text>
      <Text style={styles.numberImc}>
      {valorIMC}
      </Text>
    </View>
  );
}
export default ResultImc;
