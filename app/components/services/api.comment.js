import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchComment = async () => {
  const response = await axios.get(`${ApiUrl}/comment/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const fetchAllComments = async () => {
  const response = await axios.get(`${ApiUrl}/comment/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const changeStatus = async (id) => {
  const response = await axios.get(`${ApiUrl}/comment/change-status/${id}`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteComment = async (id) => {
  const response = await axios.get(`${ApiUrl}/comment/delete/${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockComment = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/comment/update/${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockComment = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/comment/update-comment?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createComment = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/comment/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateComment = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/comment/update/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updatePassword = async ({ password, id }) => {
  const response = await axios.post(
    `${ApiUrl}/comment/update-password/${id}`,
    { password },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updateImage = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/comment/update-image/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
