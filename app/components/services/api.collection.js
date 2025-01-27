import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchCollection = async () => {
  const response = await axios.get(`${ApiUrl}/collection/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const fetchAllCollections = async () => {
  const response = await axios.get(`${ApiUrl}/collection/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteCollection = async (id) => {
  const response = await axios.get(`${ApiUrl}/collection/delete/${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockCollection = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/collection/update/${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockCollection = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/collection/update-collection?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createCollection = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/collection/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateCollection = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/collection/update/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updatePassword = async ({ password, id }) => {
  const response = await axios.post(
    `${ApiUrl}/collection/update-password/${id}`,
    { password },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updateImage = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/collection/update-image/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
