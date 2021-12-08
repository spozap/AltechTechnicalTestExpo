import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function useAuth() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function findLoggedUser() {
      const User = await AsyncStorage.getItem('users');
      if (User) {
        console.log(User);
        setUser(JSON.parse(User));
      }
    }

    findLoggedUser();
  }, []);

  return {
    user,
    setUser,
  };
}