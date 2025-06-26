import React from 'react'
import { Text, TextInput, View, KeyboardAvoidingView, TouchableOpacity, StyleSheet, Platform, Touchable } from 'react-native'

const login = () => {
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
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#777"
          style={styles.inputField}
          autoCapitalize="none"
          secureTextEntry
        />
      </View>

      <TouchableOpacity>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity>
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
