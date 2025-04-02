import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ScreenWrapper from '../../components/ScreenWrapper';
import CustomTextInput from '../../components/Common/CustomTextInput';
import CustomButton from '../../components/Common/CustomButton';
import Toast from 'react-native-toast-message';

const DUMMY_CREDENTIALS = { username: 'admin', password: 'admin123' };

const LoginScreen = ({ navigation }) => {

  const [userDetails, setUserDetails] = useState(
    {
      userName: {
        label: "Username*",
        value: "",
        required: true,
        error_msg: "",
        error: false,
        maxLength: 100,
        name: 'username',
        placeholder: 'Enter Username',
      },
      password: {
        label: "Password*",
        value: "",
        required: true,
        error_msg: "",
        error: false,
        maxLength: 50,
        name: 'password',
        secureTextEntry: true,
        placeholder: 'Enter password',
      },
    });


  const handleInput = (label, value) => {
    if (!label) return;

    setUserDetails((prevTaskInput) => ({
      ...prevTaskInput,
      [label]: {
        ...prevTaskInput[label],
        value: value.trim()
      }
    }))
  }

  const handleLogin = async () => {
    const {userName, password} = userDetails;

    if(!userName.value || !password.value){
      Toast.show({
        type:'info',
        text1:"Please fill required fields"
      })
      return;
    }
    if (userName.value === DUMMY_CREDENTIALS.username && password.value === DUMMY_CREDENTIALS.password) {
      await AsyncStorage.setItem('user', JSON.stringify({ username:userName.value }));
      navigation.replace('BottomTabRoutes');
    } else {
      Alert.alert('Invalid Credentials', 'Please check your username and password.');
    }
  };

  const inputDataKeys = Object.keys(userDetails);


  return (
    <ScreenWrapper title={"Login"}>
      <View style={styles.container}>
        {
          inputDataKeys.map((item, index) => {
            return (
              <CustomTextInput
                key={index}
                labelName={userDetails[item].label}
                value={userDetails[item].value}
                name={item}
                requiredField={userDetails[item].required}
                maxLength={userDetails[item].maxLength}
                handleInput={handleInput}
                placeholder={userDetails[item].placeholder}
                disabled={userDetails[item].disabled}
                keyboardType={userDetails[item].keyboardType}
                secureTextEntry={userDetails[item].secureTextEntry}
              />
            )
          })
        }

        <CustomButton label="Login" onPress={handleLogin} />
      </View>
    </ScreenWrapper>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center'
  },
})