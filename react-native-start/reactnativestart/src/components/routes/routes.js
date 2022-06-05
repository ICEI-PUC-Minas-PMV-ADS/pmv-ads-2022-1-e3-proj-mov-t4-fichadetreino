import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import {View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView} from "react-native";
import { getAuth, signOut } from "firebase/auth";
import { useNavigation,useRoute } from "@react-navigation/native";

import Task from "../Task/Task";
import LogoutRoute from '../Login/logoff';
import newTask from "../newTask/newTask";


const MyComponent = () => {
    const route = useRoute();
    const [index, setIndex] = React.useState(0);

    const [routes] = React.useState([
      { key: 'Tasks', title: 'Ficha de Treino', icon: 'home-circle' },
      { key: 'newTasks', title: 'Novo Treino', icon: 'run-fast' },
      { key: 'sair', title: 'Sair ', icon: 'account-alert' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
      Tasks: Task,
      newTasks: newTask,
      sair:LogoutRoute,
    });

    return (
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    );
};

export default MyComponent;
