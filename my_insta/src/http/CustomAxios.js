import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

axios.defaults.baseURL = "http://192.168.0.82:8000";
export const IMG_PATH = "http://192.168.0.82:8000";
export const customAxios = async (url, method, data) => {
  const response = await axios({
    url,
    method,
    data,
    headers: {
      Authorization: `Bearer ${AsyncStorage.getItem("token")}`,
    },
  });
  return response.data;
};

export const fileAxios = async (url, method, data) => {
  const response = await axios({
    url,
    method,
    data,
    headers: {
      Authorization: `Bearer ${AsyncStorage.getItem("token")}`,
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
