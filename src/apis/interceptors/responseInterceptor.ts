import axiosInstance from '../config/axiosInstance';

axiosInstance.interceptors.response.use(
  (response) => {
    // 응답을 받은 후 수행할 작업들을 정의합니다.
    // 예: 응답 데이터 처리, 에러 처리 등
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);
