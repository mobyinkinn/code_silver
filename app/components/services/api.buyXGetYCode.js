import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchBuyXGetYCode = async () => {
  const response = await axios.get(`${ApiUrl}/buyXGetYCode/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const fetchAllBuyXGetYCodes = async () => {
  const response = await axios.get(`${ApiUrl}/buyXGetYCode/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteBuyXGetYCode = async (id) => {
  const response = await axios.get(`${ApiUrl}/buyXGetYCode/delete/${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockBuyXGetYCode = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/buyXGetYCode/update/${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockBuyXGetYCode = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/buyXGetYCode/update-buyXGetYCode?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createBuyXGetYCode = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/buyXGetYCode/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateBuyXGetYCode = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/buyXGetYCode/update/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );

  return response;
};
