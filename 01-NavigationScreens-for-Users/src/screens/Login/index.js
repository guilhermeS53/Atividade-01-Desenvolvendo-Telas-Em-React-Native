// Importação das bibliotecas do React
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style'

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
