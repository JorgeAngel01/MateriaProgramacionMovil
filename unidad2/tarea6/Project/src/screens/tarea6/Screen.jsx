import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Button from "../../components/Button";
import { THEME } from "../../theme/styles";
import { useNavigation } from "@react-navigation/native";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Header } from "../../components/tarea6/Header";

const Screen = ({ route, navigation }) => {
  const { texto1, texto2 } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Header texto1={texto1} texto2={texto2} />
        <View style={styles.dateContainer}>
          <View style={styles.textIconContainer}>
            <EvilIcons name="calendar" size={24} color="black" />
            <Text style={styles.textDate}> Today </Text>
          </View>
          <View style={styles.textIconContainer}>
            <EvilIcons name="clock" size={24} color="black" />
            <Text style={styles.textDate}> 10:11:00 </Text>
          </View>
        </View>
        <View style={styles.ticketContainer}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Text style={styles.textTicket}> Ticket 1 </Text>
            <EvilIcons name="refresh" size={32} color={THEME.COLORS.DUN} />
          </View>
          <View style={styles.circleContainer}>
            <View style={styles.circle}>
              <Text style={styles.text}> 1 </Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.text}> 7 </Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.text}> 14 </Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.text}> 15 </Text>
            </View>
            <View style={styles.circle}>
              <Text style={styles.text}> 19 </Text>
            </View>
          </View>
        </View>
        <View style={styles.rates}>
          <View style={styles.rateContainer}>
            <Text style={styles.textHeader}> Rate type</Text>
            <Text style={styles.text}> One time bet </Text>
            <View style={styles.circleRate}>
              <AntDesign name="check" size={18} color="white" />
            </View>
          </View>
          <View style={styles.rateContainer}>
            <Text style={styles.textHeader}> Rate type</Text>
            <Text style={styles.text}> Subscription </Text>
            <View style={[styles.circleRate, {backgroundColor: "#ecebe9"}]}>
              <AntDesign name="check" size={18} color="#908c89" />
            </View>
          </View>
        </View>
      </View>

      <Button
        isPrimary
        color={THEME.COLORS.GREEN.DARKSPRING}
        text="Get Started"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: THEME.COLORS.CHAMPAGÑE,
  },
  content: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    height: "80%",
  },
  dateContainer: {
    marginVertical: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 50,
    width: "70%",
    borderRadius: 10,
    backgroundColor: THEME.COLORS.DUN,
  },
  ticketContainer: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    width: "95%",
    backgroundColor: THEME.COLORS.GREEN.DARKSPRING,
  },
  rates: {
    marginVertical: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "95%",

    flexWrap: "wrap",
  },
  rateContainer: {
    padding: 20,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    borderRadius: 10,
    height: 150,
    width: "49%",
    backgroundColor: THEME.COLORS.WHITE,
  },
  textIconContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
  },
  icon: {
    fontWeight: "bold",
  },
  textDate: {
    fontSize: 16,
    color: THEME.COLORS.BLACK,
  },
  textTicket: {
    fontSize: 16,
    fontWeight: "bold",
    color: THEME.COLORS.WHITE,
  },
  circleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
  },
  circle: {
    width: 55,
    height: 55,
    borderRadius: 50,
    backgroundColor: THEME.COLORS.YELLOW.MUSTARD,
    justifyContent: "center",
    alignItems: "center",
  },
  circleRate: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: THEME.COLORS.ORANGE.CRAYOLA,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    marginTop: 40,
  },

  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: THEME.COLORS.BLACK,
  },
  footer: {
    marginBottom: 10,
  },
});

export default Screen;
