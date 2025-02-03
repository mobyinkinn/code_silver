import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchHamper = async () => {
  const response = await axios.get(`${ApiUrl}/hampers/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const fetchAllHampers = async () => {
  const response = await axios.get(`${ApiUrl}/hampers/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteHamper = async (id) => {
  const response = await axios.get(`${ApiUrl}/hampers/delete?id=${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockHamper = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/hampers/update?id=${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockHamper = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/hampers/update-hamper?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createHamper = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/hampers/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateHamper = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/hampers/update?id=${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updatePassword = async ({ password, id }) => {
  const response = await axios.post(
    `${ApiUrl}/hampers/update-password/${id}`,
    { password },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updateImage = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/hampers/update-image/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
