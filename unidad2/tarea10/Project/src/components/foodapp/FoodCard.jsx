import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { THEME } from "../../theme/styles";

const FoodCard = ({ name, price, image, imageUrl }) => {
  return (
    <View style={styles.container}>
      {image && <Image source={image} style={styles.image} />}
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 205,
    height: 275,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    zIndex: 1,
    top: 60,
  },
  content: {
    bottom: 50,
    height: "80%",
    width: "100%",
    padding: 10,
    justifyContent: "flex-end",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 30,
    paddingBottom: 20,
    borderColor: THEME.COLORS.BLUE.VERDIGRIS,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color:  THEME.COLORS.BLUE.VERDIGRIS,
  },
});

export default FoodCard;
