import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import NewTask from "../newTask/newTask";
import Details from "../Details/Details";
import routes from "./routes";
import Task from "../Task/Task";
import Login from "../Login/Login";
import Register from "../Register/Register";

  const Stack =  createStackNavigator();
  const Main = ()=>{
    return (
      <Stack.Navigator initialRouteName="Login">

      <Stack.Screen name="Ficha de Treino &#127942;" component={routes}

      />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Registre-se" component={Register} />
      <Stack.Screen name="Treinos diarios" component={Task}
      options={{headerLeft:null}}
      />
      <Stack.Screen name="Novo Treino"    component={NewTask} />
      <Stack.Screen name="Detalhes"         component={Details}/>
      <Stack.Screen name="Treinos"         component={routes}/>
      </Stack.Navigator>
    );

  }

  export default Main;
