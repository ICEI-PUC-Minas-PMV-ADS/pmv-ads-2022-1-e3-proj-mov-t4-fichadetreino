import React, { useEffect, useState } from 'react';
import { List, Item, Text, FAB, Checkbox } from 'react-native-paper';
import { FlatList, StyleSheet,View } from 'react-native';

import Header from '../components/Header';
import Container from '../components/Container';
import Body from '../components/Body';

import { useNavigation } from '@react-navigation/native';
import {getExercicio} from '../services/ficha.services';
import { useIsFocused } from '@react-navigation/native';

const Ficha = () => {
 
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [exercicios, setExercicios] = useState([]);
  const [checked, setChecked] = React.useState(false);

  useEffect(() => {

    getExercicio().then(dados => {
      console.log(dados);
      setExercicios(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <>
      <List.Item
        title={'Exercício: ' + item.nome}
        description={
          'Séries: ' + item.series + ('\nRepetições: ' + item.repeticoes)
        }
        right={(props) => (
          <View>
            <Text {...props} style={{ alignSelf: 'center' }}>
              {'Carga: '} {item.carga} {'KG'}
            </Text>
          </View>
        )}
        left={(props) => (
          <View>
            <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
          />
          </View>
        )}
        onPress={() => navigation.navigate('Exercicio', { item })}
      />
    </>
  );

  return (
    <Container>
      <Header title={'Lista de Exercícios'} />
      <Body>
        <FlatList
          data={exercicios}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
        
        <FAB
          style={styles.fab}
          small
          icon="plus"
          onPress={() => navigation.navigate('Exercicio')}
        />
      </Body>
    </Container>
  );
};

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: '#6974CF',
  },
});

export default Ficha;
