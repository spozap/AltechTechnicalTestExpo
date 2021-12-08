import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/components/Login';
import Register from './src/components/Register';
import Home from './src/components/Home';
import {UserContext} from './src/context/authcontext'
import useAuth from './src/hooks/useAuth';
import Profile from './src/components/Profile';

const Stack = createNativeStackNavigator();

const App = () => {
  const {user, setUser} = useAuth();
  return (
    <UserContext.Provider value={{user, setUser}}>
      <NavigationContainer>
        {user ? (
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName="Login">
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;