import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchAdmin = async () => {
  const response = await axios.get(`${ApiUrl}/admin/get-admin`, {
    withCredentials: true,
  });

  return response.data.data;
};

export const fetchAllAdmins = async () => {
  const response = await axios.get(`${ApiUrl}/admin/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteAdmin = async (id) => {
  const response = await axios.get(`${ApiUrl}/admin/delete/${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockAdmin = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/admin/update/${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockAdmin = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/admin/update-admin?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createAdmin = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/admin/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateAdmin = async ({ formdata, id }) => {
  const response = await axios.post(`${ApiUrl}/admin/update/${id}`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updatePassword = async ({ password, id }) => {
  const response = await axios.post(
    `${ApiUrl}/admin/update-password/${id}`,
    { password },
    {
      withCredentials: true,
    }
  );

  return response;
};
