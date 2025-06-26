import React, { useState, useEffect } from 'react'
import { Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Platform } from 'react-native'

import { auth } from '../../firebaseConfig';
import { User, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const login = () => {
  const [email, setEmail]= useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     setUser(user);
  //   });
  // }, []);

  const handleCreate = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert(`User Created! Welcome [user]`);
      })
      .catch((error) => {
        alert(`Error {error.code}: {error.message}`);
      });
  };

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

      <TouchableOpacity>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleCreate}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <Text style={{marginTop: 15, textAlign: 'center', color: 'gray'}}>
        Logged in as: [user]
      </Text>

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
