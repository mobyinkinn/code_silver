import axios from "axios";
import { ApiUrl } from "./Api";

export async function login({ email, password }) {
  const url = `${ApiUrl}/customer/login`;
  const data = { email, password };
  return axios.post(url, data, { withCredentials: true });
}

// export async function getCurrentCustomer() {
//   const url = `${ApiUrl}/admin/get-customer`;
//   try {
//     const { data, error } = await axios.get(url, { withCredentials: true });
//     if (data.statusCode === 200) {
//       return data;
//     }
//   } catch (err) {
//     return null;
//   }
// }

export async function logout() {
  const url = `${ApiUrl}/customer/logout`;
  const { data, error } = await axios.post(url, {}, { withCredentials: true });
  return data;
}
