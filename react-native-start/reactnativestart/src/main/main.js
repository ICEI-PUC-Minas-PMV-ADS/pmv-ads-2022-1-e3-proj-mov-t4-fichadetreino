import React from 'react';
import { View } from 'react-native';
import Form from '../components/Form/form';
import Title from '../components/Title/title';
//Main e o Base Da view
//Form e aquela parte aparente do formulario
const Main =()=>{
  return(
    <View>
      <Title/>
      <Form/>
    </View>
  );

}
export default Main;
