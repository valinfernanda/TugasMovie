import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet } from 'react-native'
import Router from './pages/router'


export default function App() {
  return (
    <NavigationContainer>
      <Router />
      
    </NavigationContainer>
      
    
  )
}

const styles = StyleSheet.create({})
