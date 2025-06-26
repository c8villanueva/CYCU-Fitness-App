import { Tabs } from 'expo-router'
import React from 'react'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index"
        options={{
          title: 'Home',
          headerShown: false
        }}
      />
      <Tabs.Screen 
        name="profile"
        options={{
          title: 'Profile',
          headerShown: false
        }}
      />
      <Tabs.Screen 
        name="login"
        options={{
          title: 'Log In',
          headerShown: false
        }}
      />
      <Tabs.Screen 
        name="signin"
        options={{
          title: 'Register',
          headerShown: false
        }}
      />
    </Tabs>
  )
}

export default _layout