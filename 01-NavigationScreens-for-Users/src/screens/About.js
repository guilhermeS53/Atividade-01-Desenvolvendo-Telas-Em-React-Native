// Importação das bibliotecas do React
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>About</Text>
            <Text style={styles.message}>Developed by Guilherme Barbosa de Oliveira Sousa</Text>
            <Text style={styles.title}>Version</Text>
            <Text style={styles.message}>FirstApp version 1.0</Text>
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
    button: {
        backgroundColor: '#107184',
    },
});