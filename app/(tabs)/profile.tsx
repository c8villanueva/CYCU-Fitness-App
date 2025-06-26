import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

import { auth } from '../../firebaseConfig'
import { signOut } from 'firebase/auth'

import { router } from 'expo-router'

const profile = () => {
  const user = auth.currentUser;

  const handleLogout = async () => {
      try {
        await signOut(auth)
        router.replace('/(tabs)/login')
      } catch (error: any) {
        console.error(`Logout failed: ${error.message}`)
      }
    };

  return (
    <View style={styles.container}>
      {user && <Text style={styles.title}>Hello, {user.email}!</Text>}
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
    fontWeight: 'bold',
    paddingBottom: 15,
  },
  buttonText:{
    textAlign: 'center',
    marginTop: 12,
    fontSize: 18,
  }
});
