import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const Clock = props => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  });

  const options = {hour12: false, hour: 'numeric', minute: 'numeric'};

  return <Text style={styles.clock}>Klokken er {time.toLocaleTimeString('default', options)}</Text>;
};

const styles = StyleSheet.create({
  clock: {
    fontSize: RFPercentage(10),
    color: "#323232",
  }
});

export default Clock;
