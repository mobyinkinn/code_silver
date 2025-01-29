import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchReview = async () => {
  const response = await axios.get(`${ApiUrl}/review/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const fetchAllReviews = async () => {
  const response = await axios.get(`${ApiUrl}/review/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const changeStatus = async (id) => {
  const response = await axios.get(`${ApiUrl}/review/change-status/${id}`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteReview = async (id) => {
  const response = await axios.get(`${ApiUrl}/review/delete/${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockReview = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/review/update/${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockReview = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/review/update-review?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createReview = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/review/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateReview = async ({ formdata, id }) => {
  const response = await axios.post(`${ApiUrl}/review/update/${id}`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updatePassword = async ({ password, id }) => {
  const response = await axios.post(
    `${ApiUrl}/review/update-password/${id}`,
    { password },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updateImage = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/review/update-image/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
