import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchDiscount = async () => {
  const response = await axios.get(`${ApiUrl}/discount/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const fetchAllDiscounts = async () => {
  const response = await axios.get(`${ApiUrl}/discount/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteDiscount = async (id) => {
  const response = await axios.get(`${ApiUrl}/discount/delete/${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockDiscount = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/discount/update/${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockDiscount = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/discount/update-discount?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createDiscount = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/discount/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateDiscount = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/discount/update/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updatePassword = async ({ password, id }) => {
  const response = await axios.post(
    `${ApiUrl}/discount/update-password/${id}`,
    { password },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updateImage = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/discount/update-image/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
