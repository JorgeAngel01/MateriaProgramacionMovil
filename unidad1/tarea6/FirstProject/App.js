import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  ScrollView,
  FlatList,
} from "react-native";
import Login from "./src/screens/Login";
import Person from "./src/components/Person";
import { facebookImage, googleImage } from "./assets";

const DATA = [
  { id: 0, name: "Eder", lastName: "Rivera" , image: googleImage},
  { id: 1, name: "Martin", lastName: "Gonzalez", image: googleImage },
  { id: 2, name: "Aurora", lastName: "Maldonado", image: googleImage },
  { id: 3, name: "Jorge", lastName: "Diaz", image: googleImage },
  { id: 4, name: "Pedro", lastName: "Licea", image: googleImage },
  { id: 5, name: "Nicolas", lastName: "Alvarez", image: googleImage },
  { id: 7, name: "Nicolas2", lastName: "Alvarez", image: googleImage },
  { id: 8, name: "Nicolas3", lastName: "Alvarez", image: googleImage },
];

export default function App() {
  const { height, width } = Dimensions.get("screen");
  return (
    <View style={styles.container}>
      {/* <Login/> */}
      <FlatList
        data={DATA}
        renderItem={({item: {name, lastName, image}, index}) => (
          <Person name={name} lastName={lastName} image={image} index={index} />
        )}
        ItemSeparatorComponent={<View style={{margin: 5}}></View>}
        keyExtractor={({id}) => id}

      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
        
      ))}*/
}
