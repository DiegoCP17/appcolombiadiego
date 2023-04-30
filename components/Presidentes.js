import React, { useEffect, useState } from "react"; // Importamos las funciones necesarias desde React
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native"; // Importamos los componentes necesarios desde React Native
import { getPresidentesColombia } from "../api/services"; // Importamos la función que obtiene los datos de los presidentes desde un servicio API

const Presidentes = () => {
  // Definimos nuestro componente funcional llamado Presidentes
  const [presidentesColombia, setPresidentesColombia] = useState([]); // Definimos el estado inicial de los presidentes como un array vacío y la función para actualizarlo
  const [searchTerm, setSearchTerm] = useState(""); // Definimos el estado inicial del término de búsqueda como una cadena vacía y la función para actualizarlo

  useEffect(() => {
    // Usamos el hook useEffect para ejecutar una acción en el momento en que se monta el componente
    async function fetchData() {
      // Definimos una función asincrónica que obtiene los datos de los presidentes
      const presidentesColombia = await getPresidentesColombia();
      setPresidentesColombia(presidentesColombia); // Actualizamos el estado de los presidentes con los datos obtenidos
    }
    fetchData(); // Llamamos a la función que obtiene los datos
  }, []); // La dependencia está vacía, lo que significa que solo se ejecutará una vez al montar el componente

  const filteredPresidents = presidentesColombia.filter((president) =>
    president.description.toLowerCase().includes(searchTerm.toLowerCase())
  ); // Creamos una nueva variable que filtra los presidentes según el término de búsqueda

  const [showMore, setShowMore] = useState(false); // Definimos el estado inicial de la variable que indica si se muestran todos los presidentes o solo algunos y la función para actualizarla

  const toggleShowMore = () => setShowMore((prev) => !prev); // Definimos una función que cambia el valor de la variable que indica si se muestran todos los presidentes o solo algunos

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => setSearchTerm(text)}
          value={searchTerm}
          placeholder="Buscar presidente..."
          leftIcon={{ type: "font-awesome", name: "search" }} // Agregamos un icono de búsqueda a la izquierda del cuadro de búsqueda
        />
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.card}>
          <Text style={styles.title}>Presidentes de Colombia</Text>
          {filteredPresidents
            .slice(0, showMore ? undefined : 4)
            .map((president) => (
              <Text key={president.id} style={styles.text}>
                {president.description}
                {"\n\n"}
              </Text>
            ))}
          {filteredPresidents.length > 4 && (
            <TouchableOpacity
              style={styles.buttonContainer}
              onPress={toggleShowMore}
            >
              <Text style={styles.buttonText}>
                {showMore ? "Ver menos" : "Ver más"}
              </Text>
            </TouchableOpacity>
          )}
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
    backgroundColor: "#F5FCFF",
    paddingTop: 30,
  },
  scrollView: {
    width: "100%",
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
  buttonContainer: {
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "#00FFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  card: {
    width: "95%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    padding: 25,
    shadowColor: "#00FFFF",
    shadowOffset: { width: 2, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 5,
  },
  searchContainer: {
    width: "95%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  searchInput: {
    fontSize: 16,
    borderColor: "#00FFFF",
    height: 40,
  },
});

export default Presidentes;
