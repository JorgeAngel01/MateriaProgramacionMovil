import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { THEME } from "../../theme/styles";

const InputWithLabel = ({ label, placeholder, value, onChangeText, isSecret }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isSecret}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 10,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: THEME.COLORS.GREY,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
});

export default InputWithLabel;
