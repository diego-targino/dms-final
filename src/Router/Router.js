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
import { Image, TouchableOpacity } from "react-native";

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
            <Stack.Screen
              name="AddBook"
              options={{
                headerLeft: (props) => {
                  return (
                    <TouchableOpacity
                      style={{ marginLeft: 20 }}
                      onPress={props.onPress}
                    >
                      <Image
                        source={require("../../assets/goback.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                  );
                },
              }}
            >
              {(props) => <AddBookScreen {...props} />}
            </Stack.Screen>
            <Stack.Screen
              name="BookDetails"
              options={{
                headerLeft: (props) => {
                  return (
                    <TouchableOpacity
                      style={{ marginLeft: 20 }}
                      onPress={props.onPress}
                    >
                      <Image
                        source={require("../../assets/goback.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                  );
                },
              }}
            >
              {(props) => <BookDetailsScreen {...props} book={{}} />}
            </Stack.Screen>
            <Stack.Screen
              name="EditBook"
              options={{
                headerLeft: (props) => {
                  return (
                    <TouchableOpacity
                      style={{ marginLeft: 20 }}
                      onPress={props.onPress}
                    >
                      <Image
                        source={require("../../assets/goback.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                  );
                },
              }}
            >
              {(props) => <EditBookScreen {...props} book={{}} />}
            </Stack.Screen>
          </>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen
              name="Registration"
              options={{
                headerLeft: (props) => {
                  return (
                    <TouchableOpacity
                      style={{ marginLeft: 20 }}
                      onPress={props.onPress}
                    >
                      <Image
                        source={require("../../assets/goback.png")}
                        style={{ width: 20, height: 20 }}
                      />
                    </TouchableOpacity>
                  );
                },
              }}
              component={RegistrationScreen}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
