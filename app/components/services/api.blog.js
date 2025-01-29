import axios from "axios";
import { ApiUrl } from "./Api";

export const fetchBlog = async () => {
  const response = await axios.get(`${ApiUrl}/blog/get-all`, {
    withCredentials: true,
  });
  return response.data.message;
};

export const fetchAllBlogs = async () => {
  const response = await axios.get(`${ApiUrl}/blog/get-all`, {
    withCredentials: true,
  });

  return response.data.message;
};

export const deleteBlog = async (id) => {
  const response = await axios.get(`${ApiUrl}/blog/delete/${id}`, {
    withCredentials: true,
  });

  return response;
};

export const blockBlog = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/blog/update/${id}`,
    { status: false },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const unblockBlog = async (id) => {
  const response = await axios.post(
    `${ApiUrl}/blog/update-blog?id=${id}`,
    { status: true },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const createBlog = async (formdata) => {
  const response = await axios.post(`${ApiUrl}/blog/create`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updateBlog = async ({ formdata, id }) => {
  const response = await axios.post(`${ApiUrl}/blog/update/${id}`, formdata, {
    withCredentials: true,
  });

  return response;
};

export const updatePassword = async ({ password, id }) => {
  const response = await axios.post(
    `${ApiUrl}/blog/update-password/${id}`,
    { password },
    {
      withCredentials: true,
    }
  );

  return response;
};

export const updateImage = async ({ formdata, id }) => {
  const response = await axios.post(
    `${ApiUrl}/blog/update-image/${id}`,
    formdata,
    {
      withCredentials: true,
    }
  );
  return response.data;
};
