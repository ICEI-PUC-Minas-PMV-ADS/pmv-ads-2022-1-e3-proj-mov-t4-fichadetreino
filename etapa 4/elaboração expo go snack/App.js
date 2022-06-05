import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { ViewPropTypes } from 'deprecated-react-native-prop-types';


import Route from './src/Navigations/Route';

import UserProvider from './src/contexts/UserContext';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Route />
      </NavigationContainer>
    </UserProvider>
  );
};
export default App;
