import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    message: {
        fontSize: 18,
        marginBottom: 10,
    },
    version: {
        fontSize: 16,
    },
});

export default UserDetails;