import React, { useState, useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { useTranslation } from 'react-i18next';

const Calendar = props => {
  const [time, setTime] = useState(new Date());
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000 * 60);
    return () => clearInterval(id);
  });

  const day = time.getDate();
  const month = time.getMonth();
  const year = time.getFullYear();

  return <Text style={styles.calendar}>{day}. {t("m" + month)} {year}</Text>;
};

const styles = StyleSheet.create({
    calendar: {
      fontSize: RFPercentage(15),
      color: "#323232",
    }
  });

export default Calendar;
