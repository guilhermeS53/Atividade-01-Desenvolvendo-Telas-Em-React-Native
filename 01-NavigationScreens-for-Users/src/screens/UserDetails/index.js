// Importação das bibliotecas do React
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AboutScreen from '../About';
import styles from './style'

const UserDetails = ({ route }) => {
    const { name, age, email } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Details</Text>
            <Text style={styles.message}>Name: Guilherme Barbosa de Oliveira Sousa</Text>
            <Text style={styles.message}>Age: 21 years old</Text>
            <Text style={styles.message}>Email: guilhermetxt53@gmail.com</Text>
        </View>
    );
};

export default UserDetails