import { sharedStyles as styles } from '../../styles/shared'

import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native'

import { auth } from '../../firebaseConfig'
import { User, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

import { router } from 'expo-router'

const login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const handleLogin = async () => {
    try{
      if (!email || !password) {
        alert('Please fill in all fields');
        return;
      }

      await signInWithEmailAndPassword(auth, email, password)
      router.replace('/(tabs)/profile')
    } catch (error: any) {
      console.log(error)
      alert(`Log in failed: ${error.message}`)
    }
  };

  const handleCreate = async () => {
    router.replace('/(tabs)/signin')
  }

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={1}
    >
      <Text style={styles.title}>Authentication</Text>

      <View>
        <TextInput
          placeholder="Email"
          placeholderTextColor="#777"
          style={styles.inputField}
          keyboardType="email-address"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#777"
          style={styles.inputField}
          autoCapitalize="none"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      <TouchableOpacity onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCreate}>
        <Text style={styles.buttonText}>Create account?</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  )
}

export default login
