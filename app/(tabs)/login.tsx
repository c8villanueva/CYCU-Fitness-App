import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Platform } from 'react-native'

import { auth } from '../../firebaseConfig'
import { User, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth'

import { router } from 'expo-router'

const login = () => {
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, []);

  const handleCreate = async () => {
    try{
      const user = await createUserWithEmailAndPassword(auth, email, password)
      if(user) router.replace('/(tabs)/profile')
    } catch (error: any) {
      console.log(error)
      alert(`Registration failed: ${error.message}`)
    }
  };

  const handleLogin = async () => {
    try{
      const user = await signInWithEmailAndPassword(auth, email, password)
      if(user) router.replace('/(tabs)/profile')
    } catch (error: any) {
      console.log(error)
      alert(`Log in failed: ${error.message}`)
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={1}
    >
      <Text style={styles.title}>
        {(user) ? 'Welcome back' : 'Create your account'}
      </Text>

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
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      {user && (
        <Text style={{ marginTop: 15, textAlign: 'center', color: 'gray' }}>
          Logged in as: {user.email}
        </Text>
      )}

    </KeyboardAvoidingView>
  )
}

export default login

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
  inputField:{
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 10,
    backgroundColor: '#fff', 
  },
  buttonText:{
    textAlign: 'center',
    marginTop: 12,
    fontSize: 18,
  }
});
