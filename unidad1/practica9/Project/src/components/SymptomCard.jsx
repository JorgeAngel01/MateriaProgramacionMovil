import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const SymptomCard = ({symptom}) => {
    const symtomIcon = "b"
    const symptomName = "a"

  return (
    <View style={styles.symptomsContainer}>
      <Text
        style={{
          fontSize: 18,
          fontWeight: "600",
          color: "",
          textTransform: "capitalize",
        }}
      >
        {symtomIcon}
        {symptomName}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  symptomsContainer: {
    backgroundColor: "",
    flexDirection: "row".
    width: 150,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 15,
    marginRight: 15,
  },
});

export default SymptomCard;
