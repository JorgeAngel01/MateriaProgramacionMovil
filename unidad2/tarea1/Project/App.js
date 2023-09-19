import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  StatusBar as ReactStatus,
  View,
  Text,
  TextInput,
  FlatList,
} from "react-native";
import { useState } from "react";
import Todo from "./src/components/tarea1/Todo";
import CustomButton from "./src/components/tarea1/CustomButton";
import TodoInput from "./src/components/tarea1/TodoInput";
import { THEME } from "./src/theme/styles";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAddTodo = () => {

    if (inputValue === "") {
      return;
    }

    setTodos([
      ...todos,
      {
        id: new Date().toISOString(),
        name: inputValue,
        isCompleted: false,
      },
    ]);
    setInputValue("");
  };

  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 20, paddingTop: 10 }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "left",
            color: "white",
          }}
        >
          Todo List
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20, gap: 20 }}>
          <TodoInput value={inputValue} onChangeText={(value) => setInputValue(value)} />
          <CustomButton text="Add Task" onPress={handleAddTodo} />
        </View>
        <FlatList
          style={{ marginTop: 20 }}
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { name } }) => <Todo name={name} />}
          ItemSeparatorComponent={() => (<View style={styles.line} />)}
          ListFooterComponent={() => (<View style={styles.line} />)}
        />
      </View>

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: ReactStatus.currentHeight,
    backgroundColor: THEME.COLORS.PRIMARY,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: THEME.COLORS.SECONDARY,
    marginVertical: 10,
  },
});

/*

const [screen, setScreen] = useState(1);

  onClickScreen1 = () => {
    setScreen(1);
  };

  onClickScreen2 = () => {
    setScreen(2);
  };

  onClickScreen3 = () => {
    setScreen(3);
  };
  
{
  screen === 1 ? (
  <WelcomeScreen onSignInPress={onClickScreen2} onSignUpPress={onClickScreen3}/>
  ) : screen === 2 ? (
  <SignInScreen onPress={onClickScreen1} />
  ) : (
  <SignUpScreen onPress={onClickScreen1} />
  )}
*/
