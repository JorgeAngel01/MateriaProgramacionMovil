import React from "react";
import { Text, StyleSheet } from "react-native-web";

const CustomTexts = () => {
  return (
    <>
      <Text styles={styles.text}>IOS</Text>
      <Text styles={styles.text}>IOS</Text>
      <Text styles={styles.text}>IOS</Text>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'blue',
    fontSize: 50,
  },
});

export default CustomTexts;
