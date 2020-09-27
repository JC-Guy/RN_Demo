/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./src/screens/Home/index";
import Content from "./src/screens/content/index";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image, Button
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Stack = createStackNavigator()
function Cat(props) {
  const { name = 'CA' } = props;
  return (
    <View>
      <Text>
        Cat name is {name}
      </Text>
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#567787'
          },
          headerTintColor: '#999',
          headerTitleStyle: {
            fontWeight: 'bold'
          }
        }
        }>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'MyHome',
            headerStyle: {
              backgroundColor: "orange"
            }
          }}
          style={style.homeHeader} />
        <Stack.Screen
          name="Content"
          component={Content}
          initialParams={{ id: 200 }}
          options={
            ({ route }) => ({ title: route.params.title }),
            {
              headerTitle: props => <Cat name="CN" {...props} />,
              headerRight: () => <Button onPress={() => alert('this is right button')} title="Info" color="#757" />,
              headerStyle: {
                backgroundColor: "lightblue"
              },
              headerTintColor: '#fff',
              headerTitleStyle: {
                fontWeight: "bold"
              },
            }
          } />
      </Stack.Navigator>
    </NavigationContainer >
  )
}
const style = StyleSheet.create({
  homeHeader: {
    backgroundColor: 'orange'
  },
  contentHeader: {
    backgroundColor: 'lightblue'
  }
})