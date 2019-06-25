import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useTranslation } from 'react-i18next';

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

const timeOfDayKey = date => {
  const names = ["night", "morning", "beforeDinner", "afternoon", "evening"];
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
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  });
  
  return (
    <Text style={styles.clock}>
      {t("d" + time.getDay()).capitalize()} {t(timeOfDayKey(time))}
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
