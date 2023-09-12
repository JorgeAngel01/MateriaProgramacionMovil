import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { THEME } from "../../theme/styles";

const Card = ({ image, brand, name, price }) => {
  return (
    <View style={styles.cardContainer}>
      <Image
        style={styles.image}
        source={{
          uri: image,
        }}
      />
      <View>
        <Text style={styles.brand}>#{brand}</Text>
        <Text style={styles.name}>{name}</Text>
        <View style={{ flexDirection: "row" }}>
          <View style={styles.coin}>
            <Feather name="dollar-sign" size={24} color="black" />
          </View>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: THEME.COLORS.GREY,
    height: 300,
    width: 200,
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 30,
  },
  image: {
    marginBottom: 20,
    width: 175,
    height: 150,
  },
  brandText: {
    fontSize: 16,
    color: "#a2a2a2",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: THEME.COLORS.BLACK,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: THEME.COLORS.BLACK,
  },
  coin: {
    backgroundColor: THEME.COLORS.GOLD,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 30,
    height: 30,
    marginRight: 5,
  },
});
