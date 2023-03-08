// Importação das bibliotecas do React
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

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

// Abaixo segue estilização da tela.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 15,
    backgroundColor: '#107184',
  },
});

export default HomeScreen;