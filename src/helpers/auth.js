import AsyncStorage from '@react-native-async-storage/async-storage';

export const saveUserData = async user => {
  await AsyncStorage.setItem('users', JSON.stringify(user));
};