// Importação das bibliotecas do React
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLoginPress = () => {
    
    console.log('username:', username);
    console.log('password:', password);

    navigation.navigate('Home', { username });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>To continue, please, log in to the system</Text>
      <TextInput
        style={[styles.input, { width: 300 }]}
        placeholder="User"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={[styles.input, { width: 300 }]}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

// Abaixo segue estilização da tela.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    padding: 8,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#107184',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: '#fff',
    fontSize: 17,
  },
});
