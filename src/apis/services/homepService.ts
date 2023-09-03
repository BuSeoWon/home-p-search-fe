import axiosInstance from '../config/axiosInstance';

export const getItemList = async (section: string) => {
  try {
    const response = await axiosInstance.get(
      `/api/homep/view-item?viewSection=${section.toUpperCase()}`,
    );

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const getRandomHomep = async () => {
  try {
    const response = await axiosInstance.get(`/api/homep/random`);

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const getRandomHomepIdByTag = async (tagName: string) => {
  try {
    const response = await axiosInstance.get(`/api/tags/${tagName}/ramdom`);

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const getHomep = async (uuid: string) => {
  try {
    const response = await axiosInstance.get(`/api/homep/${uuid}`);

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};

export const postHomep = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/homep', data);

    return response.data;
  } catch (error) {
    if (error instanceof Error) throw new Error(error.message);
  }
};
