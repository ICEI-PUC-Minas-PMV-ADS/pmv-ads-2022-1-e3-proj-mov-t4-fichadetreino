import React,{useEffect,useState} from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Text
        } from "react-native";
  //importando a conexao com BD
import {Database} from "../../config/firebaseconfig";
import {FontAwesome} from "@expo/vector-icons";
import styles from './style';
import { collection,doc, deleteDoc,onSnapshot } from "firebase/firestore";
import { useNavigation,useRoute } from "@react-navigation/native";
  export default function Task(){
    const navigation =  useNavigation();
    const route =useRoute();
    // e um array que guarda as tarefas beleza.
    // acredito que va acumulando na variavel.
    const [task, setTask] = useState([]);

    // docRef = connexao,banco,GetdocOqtrazer
    //colunasSnapshot=PegaEsseDocumentoDai
    //o use Effect e uma funcao que sempre que o browser atualizar
    //ele faz uma requisicao nova trazendo os dados atualizados
    useEffect(()=>{
      const colunas = collection(Database,route.params.idUser);
      // o snapshot atualiza ela
       onSnapshot(colunas, (metadata) => {
        const arrayRecebeOForeach=[];
         metadata.forEach((doc)=>{
          arrayRecebeOForeach.push({...doc.data(),id:doc.id})
         })
         setTask(arrayRecebeOForeach)
        });
        //montei a query logo apos puxei os dados
        //veio em um formato fiz foreach na queryResult
        //logo apos joguei na variavel list

        //abaixo to puxando um objeto desestruturado;
        //Pronto joguei para o List agora vou ter que setar na variavel que se altera pelo use State;
      },[])
      // o navigate que eu recebo e pra onde eu vou quando precionado\
      //Flat list e uma lista que tem essas props ai
      //data que ela usa rederizando com o foreach item por item
      // logo apos no render item tem um item e um retorno dele
      const deleteTask = async (id)=>{
        const colunaBuscadaDoBD = doc(Database,route.params.idUser,id);
        await deleteDoc(colunaBuscadaDoBD);
      }

    return(<>
      <TouchableOpacity style={styles.menuprincipal}
      onPress={()=>{navigation.navigate("Treinos",{idUser:route.params.idUser})}}
      >
        <Text style={styles.menuPrincipalText}>
        &#128070;  Menu principal.  &#128070;
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
      <FlatList
       showsVerticalScrollIndicator={false}
       data={task}
        //  estou dentro do render item tipo um foreach de itens
       renderItem={function ({item}) {
         return(
         <View style={styles.Tasks}>
           {/* inicio do botao */}
           <TouchableOpacity
             style={styles.deleteTask}
             onPress={() => {
             deleteTask(item.id);
             } }
            >
               <Text style={styles.check}>
                 Marcar Como Concluido!
             <FontAwesome
               name="check"
               size={23}
               color="#598a00">
             </FontAwesome>
             </Text>

           </TouchableOpacity>
           {/* fim do botao */}

           {/* inicio da descricao clicavel e redirecionavel. */}
           <Text style={styles.description} >
              execução correta : {item.data_exercicio}
           </Text>
           <Text
             style={styles.description}
           >
             {item.description}
           </Text>
           <Text style={styles.description} >
              {item.peso} KG
           </Text>
             <Text
            onPress={() => {
               navigation.navigate("Detalhes", {
                 id: item.id,
                 description: item.description,
                 data_exercicio:item.data_exercicio,
                 peso:item.peso,
                 idUser:route.params.idUser,
               });
             } } >
                <FontAwesome
               name="user"
               size={23}
               color="#000DFF">
             </FontAwesome>
                      EDITAR
            </Text>
         </View>
         )
       }}
       />
      {/* navigation .navigate foi para a rota novo treino quando pressionada */}
       <TouchableOpacity style={styles.buttonNewTask}
       onPress={()=>navigation.navigate("Novo Treino",{idUser:route.params.idUser})}
       >
         <Text style={styles.iconButton} >
           +
         </Text>
       </TouchableOpacity>

      </View>
      </>
    );

  }
