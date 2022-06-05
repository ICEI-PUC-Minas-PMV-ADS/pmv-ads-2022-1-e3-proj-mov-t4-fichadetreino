import React,{useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity
  ,Vibration,Keyboard,Pressable
} from 'react-native';
import styles from "./style";
import ResultImc from "../ResultImc/ResultImc";
const Form =()=>{

const[altura,setAltura]=useState(null);
const[peso,setPeso]=useState(null);
const[resultadoIMC,setResultadoIMC]=useState("Preencha o peso e altura");
const[valorIMC,setValorIMC]=useState(null);
const [errorMsg,setErrorMsg]=useState(null);
const[textButton,setButton]=useState("Calcular");

//tentei calcular e o campo ta vazio
function verifIMC(){
  if(valorIMC==null){
    setErrorMsg("Campo obrigatorio!");
    // api de vibracao
    Vibration.vibrate();
  }
}
function imcCalc(){

return setValorIMC((peso/(altura*altura)).toFixed(2));

}
/// se existir vai se tar se nao vai continuar sendo
///preencha seu peso ou altura
//Calculou e mostrou
// depois zerou os valores dos inputs
function validacaoImc(){
if(peso != null && altura !=null){
  setErrorMsg(null);
  imcCalc();
  setPeso(null);
  setAltura(null);
  setResultadoIMC(`Seu IMC e igual a :`);
  setButton('Calcular novamente!');
  return;
}
verifIMC();
setValorIMC(null);
setButton('Calcular');
setResultadoIMC('Preencha o peso e altura ');
}
///PRESTA ATENCAO NAS FUNC FDP
//E DEPOIS ESSE PRESSABLE E COMO SE FOSSE UMA VIEW MAS QUE
//SABE QUANDO E PRESSIONADA GERA UMA FUNCAO
//E ESSE KEYBORD DIMISS VAI SER USADO QUANDO ELA FOR PRESSIONADA

  return(
    <Pressable
    onPress={Keyboard.dismiss()}
    style={styles.formContext} >
      <View style={styles.form} >
        <Text style={styles.formLabel} >Altura</Text>
        <TextInput
        style={styles.input}
        value={altura}
        //quando mudar ele recebe oq ta la dentro
        onChangeText={setAltura}
        keyboardType="numeric"
        placeholder="digite sua altura"/>
        {/* error MSG */}
        <Text style={styles.erroMsg}>
          {errorMsg}
        </Text>

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput style={styles.input}
        value={peso}
        //quando mudar ele recebe oq ta la dentro
        onChangeText={setPeso}
        keyboardType="numeric"
        placeholder="digite seu peso"
        />
        {/* error MSG */}
        <Text style={styles.erroMsg}>
          {errorMsg}
        </Text>

        <TouchableOpacity style={styles.button}
        onPress={()=>{
          validacaoImc();
        }}>
          <Text style ={styles.Textbutton}>
          {textButton}
          </Text>
          </TouchableOpacity>
      <ResultImc resultadoIMC={resultadoIMC}
      valorIMC={valorIMC}
      />
      </View>
    </Pressable>
  );
}
export default Form;
