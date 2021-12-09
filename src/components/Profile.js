import React, {useContext, useState} from 'react';
import {View, TextInput, StyleSheet, Button, Alert, Text} from 'react-native';
import {UserContext} from '../context/authcontext';
import {saveUserData} from '../helpers/auth';

const Profile = ({navigation}) => {
  const {user, setUser} = useContext(UserContext);
  const [data, setData] = useState(user);

  const modifyUser = () => {
    // Updating data on AsyncStorage and state
    saveUserData(data);
    setUser(data);

    if (data === user) {
      Alert.alert('You must change the data to update it!');
      return;
    }

    Alert.alert('User modified successfully!');
    console.log("User modified successfully")
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My profile</Text>
      <>
        <Text>Username</Text>
        <TextInput
          style={styles.input}
          value={data.name}
          onChangeText={name => setData({...data, name: name})}
        />
      </>
      <>
        <Text>Surname</Text>
        <TextInput
          value={data.surname}
          style={styles.input}
          onChangeText={surname => setData({...data, surname: surname})}
        />
      </>
      <>
        <Text>Email</Text>

        <TextInput value={data.email} style={styles.input} editable={false} />
      </>

      <Button
        style={styles.submit}
        title="Update user"
        color="#5EBEC4"
        onPress={() => modifyUser()}
      />
      <Button
        style={styles.submit}
        title="Go back"
        color="#5EBEC4"
        onPress={() => navigation.push('Home')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#FDF5DF',
  },
  input: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 5,
  },
  submit: {
    borderRadius: 5,
  },
  header: {
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '800',
    marginBottom: 20,
  },
});

export default Profile;