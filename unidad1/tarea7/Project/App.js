import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StatusBar as ReactStatus,
} from "react-native";
import { THEME } from "./src/theme/styles";
import Constants from "expo-constants";
import { Ionicons } from '@expo/vector-icons'
import Header from "./src/components/Header";
import Wallet from "./src/components/Wallet";

export default function App() {
  const { height, width } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      <Header/>
      <Wallet/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: THEME.COLORS.RED,
    paddingTop: Constants.statusBarHeight,
    //backgroundColor: "#fff",
    //alignItems: "center",
    //justifyContent: "center",
  },
});

{
  /*{DATA.map(({id,name,lastName}) => (
        <View key={id} style={{borderWidth: 1, borderColor: 'red'}}>
          <Text style={{fontSize:40}}>{name}</Text>
          <Text style={{fontSize:40}}>{lastName}</Text>
        </View>
        
      ))}
      
      <FlatList
        data={DATA}
        renderItem={({item: {name, lastName, image}, index}) => (
          <Person name={name} lastName={lastName} image={image} index={index} />
        )}
        ItemSeparatorComponent={<View style={{margin: 5}}></View>}
        keyExtractor={({id}) => id}

      />
      
      */
}
