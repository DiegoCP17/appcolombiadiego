import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getColombiaInfo } from "../api/services";
import { Icon, Button } from "react-native-elements";

const MainPage = ({ navigation }) => {
  const [colombiaInfo, setColombiaInfo] = useState({});
  const [isExpanded, setIsExpanded] = useState(false);

  async function fetchData() {
    const colombiaData = await getColombiaInfo();
    setColombiaInfo(colombiaData);
  }

  useEffect(() => {
    fetchData();
    navigation.setOptions({
      headerRight: () => {
        return <Icon name="rowing" onPress={() => navigation.navigate("")} />;
      },
    });
  }, []);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.card}>
          <Text style={styles.title}>
            Información acerca de: {colombiaInfo.name}
          </Text>
          {isExpanded && (
            <Text style={styles.text}>
              Descripción: {colombiaInfo.description}
            </Text>
          )}
          <Button
            title={isExpanded ? "Ver menos" : "Ver Descripción"}
            onPress={handleExpand}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonStyle}
          />
          <Text style={styles.text}>Capital: {colombiaInfo.stateCapital}</Text>
          <Text style={styles.text}>Superficie: {colombiaInfo.surface}</Text>
          <Text style={styles.text}>Población: {colombiaInfo.population}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  scroll: {
    width: "100%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  buttonContainer: {
    marginTop: 10,
  },
  buttonStyle: {
    backgroundColor: "#00FFFF",
  },
  card: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#00FFFF",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
});

export default MainPage;
