// Importação das bibliotecas do React
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import styles from './style'

const HomeScreen = ({ navigation, route }) => {
  const { username, name, age, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.text}>
        Welcome {username} to our first project.
        {'\n'}{'\n'} Now we can navigate between screens!
        {'\n'}{'\n'} Now are you feeling?
      </Text>

      {/* A ideia de inserir a variável username, é que quando o usuário insira seu login, a tela seguinte, HomeScreen, traga esse nome aqui na apresentação da tela */}

      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button
            title="User Details"
            onPress={() => navigation.navigate('UserDetails', { name, age, email })}
            color="#107184" />
        </View>
        <View style={styles.button}>
          <Button
            title="About"
            onPress={() => navigation.navigate('About')}
            color="#107184"
          />
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;