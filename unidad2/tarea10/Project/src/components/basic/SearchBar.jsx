import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";

const SearchBar = ({
  height,
  width,
  value,
  onChangeText,
  color,
  borderColor,
  borderRadius,
  leftIcon,
  leftIconOnPress,
  rightIcon,
  rightIconOnPress,
}) => {
  const containerStyle = {
    height: height || 40,
    width: width || "100%",
    backgroundColor: color || "#f0f0f0",
    borderColor: borderColor || "#ccc",
    borderRadius: borderRadius || 5,
  };

  return (
    <View style={[styles.searchBar, containerStyle]}>
      {leftIcon && (
        <TouchableOpacity onPress={leftIconOnPress} style={styles.icon}>
          {leftIcon}
        </TouchableOpacity>
      )}
      <TextInput
        style={styles.input}
        placeholder="Search..."
        value={value}
        onChangeText={onChangeText}
      />
      {rightIcon && (
        <TouchableOpacity onPress={rightIconOnPress} style={styles.icon}>
          {rightIcon}
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
  },
  input: {
    flex: 1,
    height: 40,
    paddingLeft: 10,
  },
  icon: {
    padding: 0,
  },
});

export default SearchBar;
