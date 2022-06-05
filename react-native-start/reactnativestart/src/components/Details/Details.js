import React,{ useState } from "react";
import {View,Text,TextInput,TouchableOpacity} from "react-native";
import styles from "./style";
import { Database } from "../../config/firebaseconfig";
import { doc,updateDoc } from "firebase/firestore";
import { useNavigation,useRoute } from "@react-navigation/native";

// tem o navigation e o route.params.(e as variaveis)
export default function Details(){
  const navigation =  useNavigation();
  const route = useRoute();
  //[peguei os dados que eu passei na rota clicando o id e description la em task]

  // func
  const editTask = async (description,data_exercicio,peso,id) =>{
  const colunaEditada = doc(Database, route.params.idUser, id);

  await updateDoc(colunaEditada,{description: description,data_exercicio:data_exercicio,peso:peso});
  navigation.goBack();
  }


  const [descriptionEdit,setDescriptionEdit]=useState(route.params.description);
  const [data_exercicio,setDataExercicio]=useState(route.params.data_exercicio);
  const [peso,setPeso]=useState(route.params.peso);
  const idTask=route.params.id;

  return(
    <View style={styles.container} >
        <Text style={styles.label}>
          (Editar) treino:
        </Text>
          <TextInput
          style={styles.inputText}
          placeholder="Ex: 4x treino de perna com 20kg 2/2"
          // valor recebe o description antigo ? e depois quando
          //onchangeText muda o description recebe oq foi mudado
          onChangeText={setDataExercicio}
          value={data_exercicio}
          />
          <TextInput
          style={styles.inputText}
          placeholder="Ex: 4x treino de perna com 20kg 2/2"
          // valor recebe o description antigo ? e depois quando
          //onchangeText muda o description recebe oq foi mudado
          onChangeText={setDescriptionEdit}
          value={descriptionEdit}
          />
          <TextInput
          style={styles.inputText}
          placeholder="Ex: 4x treino de perna com 20kg 2/2"
          // valor recebe o description antigo ? e depois quando
          //onchangeText muda o description recebe oq foi mudado
          onChangeText={setPeso}
          value={peso}
          />

          <TouchableOpacity
          style={styles.buttonNewTask}
          //quando for precionado execute essa funcao
          onPress={()=>{
           editTask(descriptionEdit,data_exercicio,peso,idTask);
          }}
          >
           <Text style={styles.iconButton}> Salvar </Text>
          </TouchableOpacity>
    </View>
  );

}
