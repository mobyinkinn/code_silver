import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchCustomer = async () => {
  const response = await axios.get(`${ApiUrl}/customer/get-customer`, {
    withCredentials: true,
  });

  return response.data.data;
};

export const fetchAllCustomers = async () => {
  const response = await axios.get(`${ApiUrl}/customer/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteCustomer = async (id) => {
  const response = await axios.get(`${ApiUrl}/customer/delete/${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockCustomer = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/customer/update/${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockCustomer = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/customer/update-customer?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createCustomer = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/customer/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateCustomer = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/customer/update/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updatePassword = async ({ password, id }) => {
  const response = await axios.post(
    `${ApiUrl}/customer/update-password/${id}`,
    { password },
    {
      withCredentials: true,
    }
  );

  return response;
};
