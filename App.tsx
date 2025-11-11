import React, { useState, useLayoutEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { Modal, View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AppStack from './app/Navigation/Stack/AppStack';


function App() {

  return (

    <NavigationContainer>
      <AppStack />
    </NavigationContainer>


  );
}

export default App;
