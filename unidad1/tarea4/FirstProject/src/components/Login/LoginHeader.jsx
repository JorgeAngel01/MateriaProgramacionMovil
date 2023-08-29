import React from 'react'
import {Text, View,  StyleSheet,} from 'react-native';

const LoginHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign in to your{'\n'}Account</Text>
      <Text style={styles.subtitle}>Sign in to your Account</Text>
    </View>
  )
}

export default LoginHeader

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',  
    alignItems: 'flex-start',    
    justifyContent: 'center',
    height: '30%',           
    width: '100%',
    backgroundColor: '#0c1c2c',
    padding: '6%',
    paddingTop: '20%'
  },
  title:{
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  },
  subtitle:{
    color: '#7c8c9b',
    fontSize: 15,
    paddingTop: 5
  }
});