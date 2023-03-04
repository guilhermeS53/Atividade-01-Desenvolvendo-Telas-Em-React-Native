import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation, route }) => {
  const { username } = route.params;

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Home</Text>
      <Text style={{ textAlign: 'center', marginBottom: 20 }}>
        Welcome {username} to our first project. Now we can navigate between screens! How are you feeling?
      </Text>
      <Button
        title="User Details"
        onPress={() => navigation.navigate('UserDetails')}
      />
      <Button
        title="About"
        onPress={() => navigation.navigate('About')}
      />
    </View>
  );
};

export default HomeScreen;