import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import CustomText from "../components/WelcomeComponents/CustomText";
import CustomIcon from "../components/WelcomeComponents/CustomIcon";
import CustomImage from "../components/WelcomeComponents/CustomImage";
import CustomTouchable from "../components/WelcomeComponents/CustomTouchable";
import Data from "../components/WelcomeComponents/Data";

export default function Welcome({ data, onPress }) {
  return (
    <>
      <View style={styles.container}>
        <CustomText
          text={"Wallet"}
          color={"#fef0ec"}
          fontSize={25}
          fontWeight={"bold"}
        ></CustomText>
        <View style={styles.container2}>
          <CustomIcon
            iconName={"ios-notifications-outline"}
            size={24}
            color="black"
            backgroundColor="#fdebd4"
            borderRadius={50}
            width={50}
            height={50}
            marginHorizontal={10}
            iconType={"Ionicons"}
          ></CustomIcon>
          <CustomImage
            imgsource="https://cdn-icons-png.flaticon.com/512/5231/5231019.png"
            width={50}
            height={50}
            backgroundColor={"#ffe7e3"}
            borderRadius={50}
          ></CustomImage>
        </View>
      </View>
      <View style={styles.textContainer}>
        <CustomText
          text={"$23,867"}
          fontSize={65}
          fontWeight={"bold"}
          color={"#ffe7e3"}
        ></CustomText>
        <CustomText
          text={"Wallet id: 2678900085"}
          color={"#eb9f7f"}
        ></CustomText>
      </View>
      <View style={styles.buttonContainer}>
        <CustomTouchable
          iconName={"arrow-down-left"}
          iconSize={30}
          iconColor={"black"}
          iconType={"Feather"}
          backgroundColor={"#f2c269"}
          borderRadius={50}
          width={80}
          height={80}
        ></CustomTouchable>
        <CustomTouchable
          iconName={"arrow-up-right"}
          iconSize={30}
          refreshplus
          iconColor={"black"}
          iconType={"Feather"}
          backgroundColor={"#f2c269"}
          borderRadius={50}
          width={80}
          height={80}
        ></CustomTouchable>
        <CustomTouchable
          iconName={"refresh-cw"}
          iconSize={30}
          iconColor={"black"}
          iconType={"Feather"}
          backgroundColor={"#f2c269"}
          borderRadius={50}
          width={80}
          height={80}
        ></CustomTouchable>
        <CustomTouchable
          iconName={"plus"}
          iconSize={30}
          iconColor={"black"}
          iconType={"AntDesign"}
          backgroundColor={"#f2c269"}
          borderRadius={50}
          width={80}
          height={80}
          onPress={onPress}
        ></CustomTouchable>
      </View>
      <View style={styles.dataContainer}>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Data
              id={item.id}
              iconName={item.iconName}
              iconType={item.iconType}
              color={item.color}
              backgroundColor={item.backgroundColor}
              text1={item.text1}
              text2={item.text2}
              text3={item.text3}
              text4={item.text4}
            ></Data>
          )}
        />
        <View style={styles.menuContainer}>
          <View style={styles.itemContainer}>
            <CustomTouchable
              iconName={"home"}
              iconSize={30}
              refreshplus
              iconColor={"black"}
              iconType={"AntDesign"}
              backgroundColor={"white"}
              width={50}
              height={30}
            ></CustomTouchable>
            <Text>Home</Text>
          </View>
          <View style={styles.itemContainer}>
            <CustomTouchable
              iconName={"wallet-outline"}
              iconSize={30}
              refreshplus
              iconColor={"black"}
              iconType={"Ionicons"}
              backgroundColor={"white"}
              width={50}
              height={30}
            ></CustomTouchable>
            <Text>Wallet</Text>
          </View>
          <View style={styles.itemContainer}>
            <CustomTouchable
              iconName={"pie-chart"}
              iconSize={30}
              refreshplus
              iconColor={"black"}
              iconType={"Feather"}
              backgroundColor={"white"}
              width={50}
              height={30}
            ></CustomTouchable>
            <Text>Chart</Text>
          </View>
          <View style={styles.itemContainer}>
            <CustomTouchable
              iconName={"settings-outline"}
              iconSize={30}
              refreshplus
              iconColor={"black"}
              iconType={"Ionicons"}
              backgroundColor={"white"}
              width={50}
              height={30}
            ></CustomTouchable>
            <Text>Settings</Text>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    alignItems: "center",
    paddingVertical: 20,
  },
  container2: {
    flexDirection: "row",
  },
  textContainer: {
    flexDirection: "column",
    marginHorizontal: 15,
    alignItems: "center",
    gap: 10,
    paddingVertical: 20,
  },
  buttonContainer: {
    paddingVertical: 20,
    flexDirection: "row",
    marginHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  dataContainer: {
    backgroundColor: "white",
    flex: 1,
    margin: 5,
    borderTopEndRadius: 20,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
  },
  menuContainer: {
    flexDirection: "row",
    marginHorizontal: 25,
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  itemContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});
