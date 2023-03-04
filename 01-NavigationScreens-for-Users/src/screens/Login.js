import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLoginPress = () => {
    // Lógica de login
    console.log('username:', username);
    console.log('password:', password);

    // Navegando para a tela Home
    navigation.navigate('Home', {username});
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
