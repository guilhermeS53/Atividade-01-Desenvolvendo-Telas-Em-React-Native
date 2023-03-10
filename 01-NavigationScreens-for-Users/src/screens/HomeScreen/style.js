// Abaixo segue estilização da tela.
import { StyleSheet } from 'react-native';

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

  export { styles }