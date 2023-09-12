import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Card from "../components/otros/Card2";
import NavBar from "../components/otros/NavBar2";
import { THEME } from "../theme/styles";

const Sarah =
  "https://m.media-amazon.com/images/M/MV5BMGI4MTMxOGYtMDEzNy00NjU3LWEyMjUtNzY0MTU0MDk5OTAxXkEyXkFqcGdeQXVyODgyOTMyMDM@._V1_.jpg";
const Camera =
  "https://instax.com/common2/img/camera/camera_12_01.png";

const CARDS = [
  {
    image: Camera,
    brand: "Fujifilm",
    name: "Instax Mini 11",
    price: 100,
  },
  {
    image: Camera,
    brand: "Portable FM",
    name: "Divoom Radio",
    price: 52,
  },
];

const Screen1 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={{ flexDirection: "column" }}>
          <Text style={styles.titleHeader}>Discover </Text>
          <Text style={styles.textHeader}>your products</Text>
        </View>
        <Image
          style={styles.headerImage}
          source={{
            uri: Sarah,
          }}
        />
      </View>

      <View style={{ flexDirection: "column" }}>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <AntDesign name="search1" size={24} color="black" />
            <Text style={{}}>Divoom</Text>
          </View>
          <View style={styles.searchSetting}>
            <Feather name="sliders" size={24} color="black" />
          </View>
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ width: "100%" }}
        >
          <View style={styles.tag}>
            <Text style={styles.tagText}>Miniso</Text>
            <Entypo name="cross" size={24} color={THEME.COLORS.GREY} />
          </View>
          <View style={styles.tag}>
            <Text style={styles.tagText}> Neurso</Text>
            <Entypo name="cross" size={24} color={THEME.COLORS.GREY} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.productContainer}>
        <Text style={styles.titleText}>Populare Product</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 20}}
        >
          {CARDS.map((card, index) => (
            <Card
              image={card.image}
              brand={card.brand}
              name={card.name}
              price={card.price}
              key={index}
            />
          ))}
        </ScrollView>
        
      </View>
      <NavBar />
    </View>
  );
};

export default Screen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.GREYLIGHT,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  headerImage: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  titleHeader: {
    fontSize: 35,
    fontWeight: "bold",
    color: THEME.COLORS.BLACK,
  },
  textHeader: {
    fontSize: 24,
    fontWeight: "300",
    color: THEME.COLORS.BLACK,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: THEME.COLORS.BLACK,
  },
  searchContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 15,
    paddingTop: 35,
    paddingBottom: 20,
  },
  searchBar: {
    backgroundColor: THEME.COLORS.WHITE,
    height: 50,
    width: "75%",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    paddingHorizontal: 10,
  },
  searchSetting: {
    backgroundColor: THEME.COLORS.ORANGE,
    height: 50,
    width: 50,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tag: {
    backgroundColor: THEME.COLORS.WHITE,
    height: 50,
    width: 100,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    paddingHorizontal: 10,
    marginHorizontal: 15,
  },
  tagText: {
    color: THEME.COLORS.GREY,
  },
  productContainer: {
    flexDirection: "column",
    marginVertical: 20,
  },
});
