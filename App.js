import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

import Clock from "./components/Clock";
import TimeOfDay from "./components/TimeOfDay";
import Calendar from "./components/Calendar";
import Messages from "./components/Messages";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topSection}>
          <View style={styles.displayElement}>
            <Calendar />
          </View>
          <View style={styles.displayElement}>
            <TimeOfDay />
          </View>
          <View style={styles.displayElement}>
            <Clock />
          </View>
        </View>
        <View style={styles.botSection}>
          <Messages />
        </View>
        <View>
          <View />
          <Text style={styles.footer}>
            johan.markus@steinholt.no 2019 &copy;
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "flex-start",
    backgroundColor: "#FDFDFD",
    margin: RFPercentage(2),
  },
  topSection: {
    flex: 3,
    justifyContent: "space-evenly"
  },
  botSection: {
    flex: 1,
    justifyContent: "flex-start"
  },
  displayElement: {
    padding: RFPercentage(2),
    backgroundColor: "#f4f4f4",
    borderRadius: 10
  },
  footerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  footer: {
    fontSize: RFPercentage(2),
    color: "#666666",
    padding: 0
  }
});
