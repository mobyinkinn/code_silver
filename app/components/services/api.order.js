import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchOrder = async () => {
  const response = await axios.get(`${ApiUrl}/order/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const fetchAllOrders = async () => {
  const response = await axios.get(`${ApiUrl}/order/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteOrder = async (id) => {
  const response = await axios.get(`${ApiUrl}/order/delete/${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockOrder = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/order/update/${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockOrder = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/order/update-order?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createOrder = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/order/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateOrder = async ({ formdata, id }) => {
  const response = await axios.post(`${ApiUrl}/order/update/${id}`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updatePassword = async ({ password, id }) => {
  const response = await axios.post(
    `${ApiUrl}/order/update-password/${id}`,
    { password },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updateImage = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/order/update-image/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
