import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Toast from 'react-native-toast-message';

import MainComponents from './src/navigation/MainComponents';
import { initDB } from './src/database/db';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

function App() {

  useEffect(() => {
    initDB();
  }, []);

  return (
    <>
      <Provider store={store}>
        <MainComponents />
        <Toast />
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({

});

export default App;
