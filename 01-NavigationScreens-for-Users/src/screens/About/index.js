// Importação das bibliotecas do React
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style'

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