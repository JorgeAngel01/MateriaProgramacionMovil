import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { THEME } from "../../theme/styles";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export const Header = ({ texto1, texto2 }) => {
  const { canGoBack, goBack } = useNavigation();
  return (
    <>
      <View style={styles.container}>
        {canGoBack() ? (
          <TouchableOpacity onPress={() => goBack()}>
            <MaterialIcons name="arrow-back-ios" size={18} color="#a8a8a8" />
          </TouchableOpacity>
        ) : null}
        <Text style={styles.texto1}>{texto1}</Text>
        <TouchableOpacity>
          <Entypo name="cross" size={24} color="#a8a8a8" />
        </TouchableOpacity>
      </View>
      {texto2 && (
        <View>
          <Text style={styles.texto2}>{texto2}</Text>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingBottom: 10,
    alignItems: "center",
    width: "100%",
  },
  texto1: {
    fontSize: 20,
    fontWeight: "bold",
    color: THEME.COLORS.BLACK,
  },
  texto2: {
    fontSize: 15,
    color: THEME.COLORS.BLACK,
    textAlign: "center",
  },
});
