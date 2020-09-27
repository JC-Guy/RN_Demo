import { NavigationContainer } from "@react-navigation/native";
import React, { Component } from "react";
import { ScrollView, Text, View, Button } from "react-native";

export default function Home({ navigation }) {

  return (
    <View>
      <Text>
        this is Home page
        </Text>
      <Button title="点击跳转" onPress={() => navigation.navigate('Content', {
        // id: 101,
        title: 'MyContent',
        timestamp: new Date().getTime()
      })} />
      <Button title="后退" onPress={() => navigation.goBack()} />
      {/* <Button title="点击跳转" onPress={() => navigation.push('Home')} /> */}
    </View>
  )

}