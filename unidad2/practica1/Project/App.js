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
import Todo from "./src/components/Todo";
import CustomButton from "./src/components/otros/Button1";
import TodoInput from "./src/components/TodoInput";

const TODOS = [
  {
    id: 1,
    name: "Task 1",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Task 2",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Task 3",
    isCompleted: false,
  },
];

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState(TODOS);

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
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
          }}
        >
          Todo List
        </Text>
        <View style={{ flexDirection: "row", marginTop: 20, gap: 20 }}>
          <TodoInput value={inputValue} onChangeText={} />
          <TextInput
            style={{
              borderWidth: 1,
              paddingHorizontal: 10,
              fontSize: 20,
              flex: 1,
              borderRadius: 5,
              height: 40,
              borderColor: "white",
              color: "white",
            }}
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
          />
          <CustomButton text="Add Task" light onPress={handleAddTodo} />
        </View>
        <FlatList
          data={TODOS}
          keyExtractor={(item) => item.id}
          renderItem={({ item: { name } }) => <Todo name={name} />}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: ReactStatus.currentHeight,
    backgroundColor: "#2a6355",
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
