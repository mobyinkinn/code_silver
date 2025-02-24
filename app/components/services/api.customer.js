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

export const exportCustomerData = async () => {
  const response = await axios.get(`${ApiUrl}/customer/export-customers`, {
    withCredentials: true,
    responseType: "blob", // Ensures the response is treated as a file
  });

  // Create a Blob URL and trigger the download
  const blob = new Blob([response.data], { type: "text/csv" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.download = "customer_data.csv"; // Desired file name
  link.click();
};

export const importCustomerData = async (file) => {
  const formData = new FormData();
  formData.append("csv", file);

  const response = await axios.post(
    `${ApiUrl}/customer/import-customers`,
    formData,
    {
      withCredentials: true,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );

  return response.data;
};
