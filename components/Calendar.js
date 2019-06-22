import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";

const Calendar = props => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000 * 60);
    return () => clearInterval(id);
  });

  const options = {day: 'numeric', month: 'long', year: 'numeric'};

  return <Text style={styles.calendar}>{time.toLocaleDateString('default', options)}</Text>;
};

const styles = StyleSheet.create({
    calendar: {
      fontSize: RFPercentage(16),
      color: "#323232",
    }
  });

export default Calendar;
