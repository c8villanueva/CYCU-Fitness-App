import { sharedStyles as styles } from '../../styles/shared'

import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, Platform } from 'react-native'

import { auth } from '../../firebaseConfig'
import { User, updateProfile, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

import { router } from 'expo-router'

const signin = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return unsubscribe;
  }, []);

  const handleCreate = async () => {
    try{
      if (!name || !email || !password) {
        alert('Please fill in all fields');
        return;
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      const currentUser = userCredential.user;

      await updateProfile(currentUser, {
        displayName: name
      })

      router.replace('/(tabs)/profile')
    } catch (error: any) {
      console.log(error)
      alert(`Registration failed: ${error.message}`)
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={1}
    >
      <Text style={styles.title}>Create your account</Text>

      <View>
        <TextInput
          placeholder="First Name"
          placeholderTextColor="#777"
          style={styles.inputField}
          autoCapitalize="none"
          value={name}
          onChangeText={setName}
        />
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

      <TouchableOpacity onPress={handleCreate}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  )
}

export default signin