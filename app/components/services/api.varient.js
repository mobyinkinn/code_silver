import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchVarient = async () => {
  const response = await axios.get(`${ApiUrl}/varient/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const fetchAllVarients = async () => {
  const response = await axios.get(`${ApiUrl}/varient/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteVarient = async (id) => {
  const response = await axios.get(`${ApiUrl}/varient/delete/${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockVarient = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/varient/update/${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockVarient = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/varient/update-varient?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createVarient = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/varient/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateVarient = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/varient/update/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updatePassword = async ({ password, id }) => {
  const response = await axios.post(
    `${ApiUrl}/varient/update-password/${id}`,
    { password },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updateImage = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/varient/update-image/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
