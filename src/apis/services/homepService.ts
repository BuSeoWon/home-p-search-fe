import axiosInstance from '../config/axiosInstance';

// left, mb, mt

export const getItemList = async (section: string) => {
  try {
    const response = await axiosInstance.get(
      `/api/homep/view-item?viewSection=${section.toUpperCase()}`,
    );

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const getHomep = async (uuid: string) => {
  try {
    const response = await axiosInstance.get(`/api/homep/${uuid}`);

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
};

export const postHomep = async (data: object) => {
  try {
    const response = await axiosInstance.post('/api/homep', data);

    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
