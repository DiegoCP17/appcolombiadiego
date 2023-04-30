import axios from "axios";

const API_URL = "https://api-colombia.com/api/v1";

// Get info Colombia ==> end point
export const getColombiaInfo = async () => {
  const response = await axios.get(API_URL + "/country/Colombia");
  return response.data;
};

//Get info Regiones de Colombia
export const getRegionesColombia = async () => {
  const response = await axios.get(API_URL + "/Region");
  return response.data;
};

//Get infor Region de Colombia
export const getRegionColombia = async () => {
  const response = await axios.get(API_URL + "/Region/${id}");
  return response.data;
};

//Get info Sobre presidentes de Colombia
export const getPresidentesColombia = async () => {
    const response = await axios.get(API_URL + "/President");
    return response.data;
}
