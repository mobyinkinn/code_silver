import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchProduct = async () => {
  const response = await axios.get(`${ApiUrl}/product/get-product`, {
    withCredentials: true,
  });

  return response.data.data;
};

export const fetchAllProducts = async () => {
  const response = await axios.get(`${ApiUrl}/product/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteProduct = async (id) => {
  const response = await axios.get(`${ApiUrl}/product/delete/${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockProduct = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/product/update/${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockProduct = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/product/update-product?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createProduct = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/product/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateProduct = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/product/update/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updatePassword = async ({ password, id }) => {
  const response = await axios.post(
    `${ApiUrl}/product/update-password/${id}`,
    { password },
    {
      withCredentials: true,
    }
  );

  return response;
};
