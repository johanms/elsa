import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const timeOfDayString = date => {
  const names = ["natt", "morgen", "formiddag", "ettermiddag", "kveld"];
  const hours = date.getHours();
  if (hours >= 18) {
    return names[4];
  }
  if (hours >= 12) {
    return names[3];
  }
  if (hours >= 9) {
    return names[2];
  }
  if (hours >= 6) {
    return names[1];
  }
  return names[0];
};

const TimeOfDay = props => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000 * 60);
    return () => clearInterval(id);
  });

  const options = { weekday: "long" };
  return (
    <Text style={styles.clock}>
      {time.toLocaleDateString("default", options).capitalize()} {timeOfDayString(time)}
    </Text>
  );
};

const styles = StyleSheet.create({
  clock: {
    fontSize: RFPercentage(12),
    color: "#323232"
  }
});

export default TimeOfDay;
