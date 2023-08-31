import React from "react";

const Person = ({ name, lastName, index}) => {
  return (
    <View style={{ borderWidth: 1, borderColor: index % 2 ? "red" : "blue" }}>
      <Text style={{ fontSize: 40 }}>{props.name}</Text>
      <Text style={{ fontSize: 40 }}>{props.lastName}</Text>
    </View>
  );
};

export default Person;
