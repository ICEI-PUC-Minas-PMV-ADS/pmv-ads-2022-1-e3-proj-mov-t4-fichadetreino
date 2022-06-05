import React,{useState} from "react";
import { collection,addDoc } from "firebase/firestore";
import {
  TouchableOpacity
  ,TextInput
  ,View
  ,Text
        }
 from "react-native";
import {Database} from '../../config/firebaseconfig';
import { useNavigation,useRoute } from "@react-navigation/native";
import styles from "./style";

//na funcao tem que passar o parametro navigation
export default function NewTask(){
  //declarando a variavel de navegacao
  const navigation =  useNavigation();
  const route = useRoute();
  //Agora criando um state para as variaveis que podem ser alteradas para gerar um valor
  const [description,setDescription] = useState("");
  const [data_exercicio,setDataExercicio] = useState("");
  const [peso,setPeso] = useState("");
  async function addTask(description) {
    // primeiro localizei a conexao e o banco e  onde vou inserir
    const colunas = collection(Database, route.params.idUser);
    await addDoc(colunas,{
    description:description,
    data_exercicio:data_exercicio,
    peso:peso,
    status:false,
    });
    //setDoc primeiro recebe o banco e a tb depois os dados
    //depois eu navego novamente para o tarefas
    //para mostrar o inserido
    navigation.navigate("Treinos diarios");
  }
  return(
    <View style={styles.container} >
        <Text style={styles.label}>
        (Novo) treino:
        </Text>
          <TextInput
          style={styles.inputText}
          placeholder="Ex: 4x treino de perna com 20kg 2/2"
          onChangeText={setDescription}
          value={description}
          // valor recebe o description antigo ? e depois quando
          //onchangeText muda o description recebe oq foi mudado
          />
          <TextInput
          style={styles.inputText}
          placeholder="Ordem dos exercicios"
          onChangeText={setDataExercicio}
          value={data_exercicio}
          // valor recebe o description antigo ? e depois quando
          //onchangeText muda o description recebe oq foi mudado
          />
          <TextInput
          style={styles.inputText}
          placeholder="peso exigido para exercicio"
          onChangeText={setPeso}
          value={peso}
          // valor recebe o description antigo ? e depois quando
          //onchangeText muda o description recebe oq foi mudado
          />
          <TouchableOpacity
          style={styles.buttonNewTask}
          //quando for precionado execute essa funcao
          onPress={()=>{
            addTask(description);
          }}
          >
           <Text style={styles.iconButton}> Salvar </Text>
          </TouchableOpacity>
    </View>
  );
}
