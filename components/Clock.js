import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useTranslation } from 'react-i18next';

const Clock = props => {
  const [time, setTime] = useState(new Date());
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  });

  const hour = ("0" + time.getHours()).slice(-2);
  const minutes = ("0" + time.getMinutes()).slice(-2);

  return <Text style={styles.clock}>{t("currentTime")} {hour}:{minutes}</Text>;
};

const styles = StyleSheet.create({
  clock: {
    fontSize: RFPercentage(10),
    color: "#323232",
  }
});

export default Clock;
