import { StatusBar } from "expo-status-bar";
import { StyleSheet, StatusBar as ReactStatus, View, Text, Modal, FlatList, Pressable } from "react-native";
import React from "react";
import Todo from "./src/components/tarea1/Todo";
import CustomButton from "./src/components/tarea1/CustomButton";
import TodoInput from "./src/components/tarea1/TodoInput";
import { THEME } from "./src/theme/styles";
import useTodos from "./src/hooks/useTodos"; // Import the new useTodos hook

export default function App() {
  const {
    inputValue,
    todos,
    editMode,
    todoID,
    todo,
    modalVisible,
    setInputValue,
    setModalVisible,
    handleAddTodo,
    handleCompleteTodo,
    handleDeleteTodo,
    handleEditMode,
    handleEditTodo,
    handleDetails,
  } = useTodos(); // Use the useTodos hook

  return (
    <View style={styles.container}>
      <ModalTodo todo={todo} modalVisible={modalVisible} setModalVisible={setModalVisible} />

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
          <TodoInput
            value={inputValue}
            onChangeText={(value) => setInputValue(value)}
          />
          <CustomButton
            text={editMode ? "Edit Task" : "Add Task"}
            onPress={editMode ? () => handleEditTodo(todoID) : handleAddTodo}
          />
        </View>
        <FlatList
          style={{ marginTop: 20 }}
          data={todos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Todo
              id={item.id}
              name={item.name}
              isCompleted={item.isCompleted}
              isEdited={item.isEdited}
              editDate={item.editDate}
              createdDate={item.createdDate}
              handleDetails={handleDetails}
              handleDelete={handleDeleteTodo}
              handleComplete={handleCompleteTodo}
              handleEditMode={handleEditMode}
            />
          )}
          ItemSeparatorComponent={() => <View style={styles.line} />}
          ListFooterComponent={() => <View style={styles.line} />}
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
  // Rest of your styles
});

// Note: I assume you've imported and used the useTodos hook correctly in your project.

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
