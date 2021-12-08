import React, {useState} from 'react';
import {Alert, StyleSheet} from 'react-native';
import {TextInput, Button, View, Text} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {validateRegister} from '../helpers/validations';
import {INVALID_REGISTRATION_MESSAGE} from '../helpers/constants';

const Register = ({navigation}) => {
  const [userData, setData] = useState({
    name: '',
    surname: '',
    email: '',
    password: '',
  });

  const register = async () => {
    if (!validateRegister(userData)) {
      Alert.alert('Invalid register data!', INVALID_REGISTRATION_MESSAGE);
      return;
    }

    try {
      await AsyncStorage.setItem('users', JSON.stringify(userData));
      Alert.alert('User registered successfully!');
      navigation.navigate('Login');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.register}> Register </Text>

      <TextInput
        placeholder="Name.."
        style={styles.input}
        onChangeText={data => setData({...userData, name: data})}
      />
      <TextInput
        placeholder="Surname..."
        style={styles.input}
        onChangeText={data => setData({...userData, surname: data})}
      />
      <TextInput
        placeholder="Email..."
        style={styles.input}
        keyboardType="email-address"
        onChangeText={data => setData({...userData, email: data})}
      />
      <TextInput
        placeholder="Password..."
        style={styles.input}
        keyboardType="default"
        secureTextEntry={true}
        onChangeText={data => setData({...userData, password: data})}
      />
      <Button color="#5EBEC4" title="Register" onPress={() => register()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#FDF5DF',
  },
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
  },
  register: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 20,
    color: '#F92C85',
  },
});

export default Register;