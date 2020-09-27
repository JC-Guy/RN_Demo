import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import React, { Component } from "react";
import { ScrollView, Text, View, Button, } from "react-native";

function getTimeFormat(timestamp) {
  const date = new Date(timestamp)
  const y = date.getFullYear()
  const m = date.getMonth() + 1
  const d = date.getDate()
  return y + '-' + m + '-' + d
}
export default function Content({ navigation, route }) {
  const { id, timestamp } = route.params
  return (
    <View>
      <Text>
        this is Content page
        </Text>
      <Text style={{ fontSize: 20, color: 'red' }}>
        {id}
      </Text>
      <Text style={{ fontSize: 16, color: 'blue' }}>{getTimeFormat(timestamp)}</Text>
      <Button title="点击跳转首页" onPress={() => navigation.navigate('Home')} />
      <Button title="后退" onPress={() => navigation.goBack()} />
      <Button title="点击回到第一页" onPress={() => navigation.popToTop()} />
      <Button title="更新title" onPress={() => navigation.setOptions({ title: 'New Content Title' })} />
    </View>
  )

}