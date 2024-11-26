import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@ react-native/native-stack";
import AddTodoScreen from "./src/screen/AddTodoScreen";
import ViewTodoScreen from "./src/screen/ViewTodoScreen";
import { SafeAreaProvider } from "react-native-safe-area-context";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="ViewTodos">
          <Stack.Screen
            name="AddTodo"
            component={AddTodoScreen}
            options={{ title: "Tambah To-Do" }}
          />
          <Stack.Screen
            name="ViewTodos"
            component={ViewTodoScreen}
            options={{ title: "Daftar To-Do" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
