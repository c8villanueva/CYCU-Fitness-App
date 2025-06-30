import { sharedStyles as styles } from '../../styles/shared'

import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { auth } from '../../firebaseConfig'
import { signOut } from 'firebase/auth'

import { router } from 'expo-router'

const profile = () => {
  const user = auth.currentUser;

  const handleLogout = async () => {
      try {
        await signOut(auth)
        router.replace('/')
      } catch (error: any) {
        console.error(`Logout failed: ${error.message}`)
      }
    };

  return (
    <View style={styles.container}>
      {user && <Text style={styles.title}>Hello, User!</Text>}
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  )
}

export default profile