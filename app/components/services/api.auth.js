import axios from "axios";
import { ApiUrl } from "./Api";

export async function login({ username, password }) {
  const url = `${ApiUrl}/admin/login`;
  const data = { username, password };
  return axios.post(url, data, { withCredentials: true });
}

export async function getCurrentAdmin() {
  const url = `${ApiUrl}/admin/get-admin`;
  try {
    const { data, error } = await axios.get(url, { withCredentials: true });
    if (data.statusCode === 200) {
      return data;
    }
  } catch (err) {
    return null;
  }
}

export async function logout() {
  const url = `${ApiUrl}/admin/logout`;
  const { data, error } = await axios.post(url, {}, { withCredentials: true });
  return data;
}
