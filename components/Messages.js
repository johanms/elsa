import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import RNCalendarEvents from "react-native-calendar-events";
import { RFPercentage } from "react-native-responsive-fontsize";

const Messages = props => {
  const [events, setEvents] = useState([]);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    if (!authorized) {
      RNCalendarEvents.authorizeEventStore().then(status => {
        if (status === "authorized") {
          setAuthorized(true);
        }
      });
    }
  });

  useEffect(() => {
    const id = setInterval(() => {
      RNCalendarEvents.fetchAllEvents(Date.now(), Date.now(), []).then(
        e => setEvents(e),
        e => {}
      );
    }, 1000);
    return () => clearInterval(id);
  });

  if (events.length > 0) {
    const event = events[0];
    return (
      <View style={styles.postit}>
        <Text style={styles.label}>Husk</Text>
        <Text style={styles.message}>{event.title}</Text>
      </View>
    );
  }

  return <View />;
};

const styles = StyleSheet.create({
  label: {
    fontSize: RFPercentage(4),
    color: "grey"
  },
  message: {
    fontSize: RFPercentage(6),
    color: "#444444"
  },
  postit: {
    padding: 16,
    backgroundColor: "#FFFF99",
    borderRadius: 10
  },
});

export default Messages;
