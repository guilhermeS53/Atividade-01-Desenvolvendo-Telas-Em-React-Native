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
      <View style={styles.buttonsContainer}>
        <View style={styles.button}>
          <Button
            title="User Details"
            onPress={() => navigation.navigate('UserDetails', { name, age, email })}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="About"
            onPress={() => navigation.navigate('About')}
          />
        </View>
      </View>
    </View>
  );
};

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
    width: '100%',
  },
});

export default HomeScreen;