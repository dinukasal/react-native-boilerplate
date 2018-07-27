import React, { Component } from "react";
import { View, Text } from "react-native";
import { observer } from "mobx";
import appStore from "../../store";

export default class Home extends Component {
  render() {
    return (
      <View>
        <Text> {appStore.name}</Text>
      </View>
    );
  }
}
