import React, {useContext} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {UserContext} from '../context/authcontext';

const Home = ({navigation}) => {
  const {user, setUser} = useContext(UserContext);

  const logout = async () => {
    setUser(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}> Welcome back {user.name} </Text>
      <View>
        <Button
          style={styles.button}
          title="Private profile"
          color="#5EBEC4"
          onPress={() => navigation.push('Profile')}
        />
        <Button
          title="Log out"
          color="#5EBEC4"
          style={styles.button}
          onPress={() => logout()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#FDF5DF',
  },
  welcome: {
    fontSize: 40,
    fontWeight: '700',
    textAlign: 'center',
    marginVertical: 15,
    color: '#F92C85',
  },
});

export default Home;