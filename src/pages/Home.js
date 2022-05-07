import React, { useState } from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

import ListaAlunos from './ListaAlunos';
import Ficha from './Ficha';
import Perfil from './Perfil';
import Login from './Login';
import Header from '../components/Header';


const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'perfil', icon: 'home' },
    { key: 'listaAlunos', icon: 'format-list-bulleted' },
    { key: 'ficha', icon: 'dumbbell' },
    {key:'cadastro', icon:'signup'}
  ]);

  const renderScene = BottomNavigation.SceneMap({
    paginaInicial: Login,
    perfil: Perfil,
    listaAlunos: ListaAlunos,
    ficha : Ficha
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;
