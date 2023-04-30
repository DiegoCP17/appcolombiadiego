import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { getRegionesColombia } from "../api/services";

const Regiones = () => {
  const [regionesColombia, setRegionesColombia] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const regionesColombia = await getRegionesColombia();
      setRegionesColombia(regionesColombia);
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Regiones de Colombia</Text>
        <ScrollView style={styles.scrollView}>
          {regionesColombia.map((Region) => (
            <Text key={Region.id} style={styles.text}>
              {Region.name}
            </Text>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F5F5F5",
  },
  card: {
    width: "70%",
    height: "40%",
    backgroundColor: "#F5F5F5",
    borderRadius: 10,
    padding: 15,
    shadowColor: "#00FFFF",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    textAlign: "center",
  },
  scrollView: {
    marginTop: 10,
    maxHeight: 200,
  },
});

export default Regiones;
