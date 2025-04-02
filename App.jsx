import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';

import MainComponents from './src/navigation/MainComponents';
import { initDB } from './src/database/db';

function App() {

  useEffect(() => {
    initDB();
  }, []);

  return (
    <>
      <MainComponents />
      <Toast />
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
