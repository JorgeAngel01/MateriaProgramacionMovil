import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  AntDesign,
  SimpleLineIcons,
  Fontisto,
  FontAwesome5,
} from "@expo/vector-icons";
import { burger, foodapp } from "../../../assets";
import { THEME } from "../../theme/styles";
import CustomLongButton from "../../components/basic/CustomLongButton";
import IconButton from "../../components/basic/IconButton";
import SearchBar from "../../components/basic/SearchBar";
import Header from "../../components/basic/Header";
import NavBar from "../../components/foodapp/NavBar";
import ButtonScroll from "../../components/foodapp/ButtonScroll";
import FoodCard from "../../components/foodapp/FoodCard";

const HomeScreen = () => {
  navigation = useNavigation();

  return (
    
    <View style={styles.container}>
      <Header
        leftComponent={
          <IconButton
            borderRadius={10}
            borderColor={THEME.COLORS.BLUE.VERDIGRIS}
            icon={<SimpleLineIcons name="grid" size={20} color={THEME.COLORS.BLUE.VERDIGRIS} />}
            onPress={() => navigation.openDrawer()}
          />
        }
        rightComponent={
          <IconButton
            borderRadius={10}
            borderColor={THEME.COLORS.BLUE.VERDIGRIS}
            icon={<Fontisto name="bell" size={24} color={THEME.COLORS.BLUE.VERDIGRIS}  />}
            onPress={() => navigation.navigate("Cart")}
          />
        }
        backgroundColor={THEME.COLORS.WHITE}
      />
      <View style={styles.content}>
        <Text style={styles.title}>Store for fast food & etc.</Text>
        <SearchBar
          borderColor="transparent"
          borderRadius={10}
          leftIcon={<AntDesign name="search1" size={14} color="black" />}
          rightIcon={<FontAwesome5 name="sliders-h" size={14} color="black" />}
        />
        <ButtonScroll />
        <ScrollView
          style={styles.scroll}
          horizontal
          showsHorizontalScrollIndicator={false}
        >
          <FoodCard name="Burger" price="$10.00" image={burger} />
          <FoodCard name="Burger" price="$10.99" image={burger} />
        </ScrollView>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: THEME.COLORS.WHITE,
    justifyContent: "space-between",
  },
  content: {
    width: "100%",
    height: "100%",
    justifyContent: "space-around",
    paddingHorizontal: "5%",
  },
  title: {
    fontSize: 24,
    textAlign: "left",
    alignSelf: "flex-start",
    color: THEME.COLORS.PRIMARY,
    marginBottom: "5%",
    paddingTop: "5%",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: THEME.COLORS.GRAY.DIM,
    marginBottom: "25%",
  },
  scroll: {
  marginTop: "5%",
  },


});

export default HomeScreen;
