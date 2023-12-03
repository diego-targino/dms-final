import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  HomeScreen,
  RegistrationScreen,
  AddBookScreen,
  BookDetailsScreen,
  EditBookScreen,
} from "../screens";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Stack = createStackNavigator();

export default function Router() {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {user ? (
          <>
            <Stack.Screen name="Home">
              {(props) => <HomeScreen {...props} extraData={user} />}
            </Stack.Screen>
            <Stack.Screen name="AddBook">
              {(props) => <AddBookScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen name="BookDetails">
              {(props) => <BookDetailsScreen {...props} book={{}} />}
            </Stack.Screen>
            <Stack.Screen name="EditBook">
              {(props) => <EditBookScreen {...props} book={{}} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
