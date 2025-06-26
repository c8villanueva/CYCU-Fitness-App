import { sharedStyles as styles } from '../../styles/shared'

import { Text, View, TouchableOpacity } from 'react-native';

import { router } from 'expo-router'

const home = () => {
  const handleLogin = async () => {
    router.replace('/(tabs)/login')
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Fitness App!</Text>
      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

export default home