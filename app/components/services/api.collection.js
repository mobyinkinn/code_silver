import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchCollections = async () => {
  const response = await axios.get(`${ApiUrl}/collection/get-all`, {
    withCredentials: true,
  });
  return response.data.message; // Adjust based on actual API structure
};
