import React from 'react'
import {Text, View,  StyleSheet,} from 'react-native';
import { THEME } from '../../theme/colors';

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
    justifyContent: 'flex-end',
    height: '30%',           
    width: '100%',
    backgroundColor: THEME.COLORS.DARK_BLUE,
    padding: '6%',
    paddingBottom: 35
  },
  title:{
    color: THEME.COLORS.WHITE,
    fontSize: 35,
    fontWeight: 'bold'
  },
  subtitle:{
    color: THEME.COLORS.GREY,
    fontSize: 15,
    paddingTop: 5
  }
});