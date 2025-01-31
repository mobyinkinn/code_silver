import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchCart = async () => {
  const response = await axios.get(`${ApiUrl}/cart/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const fetchAllCarts = async () => {
  const response = await axios.get(`${ApiUrl}/cart/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteCart = async (id) => {
  const response = await axios.get(`${ApiUrl}/cart/delete/${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockCart = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/cart/update/${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockCart = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/cart/update-cart?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createCart = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/cart/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateCart = async ({ formdata, id }) => {
  const response = await axios.post(`${ApiUrl}/cart/update/${id}`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updatePassword = async ({ password, id }) => {
  const response = await axios.post(
    `${ApiUrl}/cart/update-password/${id}`,
    { password },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updateImage = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/cart/update-image/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
