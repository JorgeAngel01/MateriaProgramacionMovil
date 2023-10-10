import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = ({ leftComponent, middleText, rightComponent, backgroundColor }) => {

  return (
    <View style={[styles.header, { backgroundColor }]}>
      <View style={styles.left}>{leftComponent}</View>
      <View style={styles.middle}>
        <Text style={styles.middleText}>{middleText}</Text>
      </View>
      <View style={styles.right}>{rightComponent}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,    
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  middle: {
    flex: 2,
    alignItems: 'center',
  },
  middleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default Header;
