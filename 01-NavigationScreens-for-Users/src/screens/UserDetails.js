import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const UserDetails = ({ route }) => {
  const { name, age, email } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Details</Text>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.text}>{name}</Text>
      <Text style={styles.label}>Age:</Text>
      <Text style={styles.text}>{age}</Text>
      <Text style={styles.label}>Email:</Text>
      <Text style={styles.text}>{email}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default UserDetails;