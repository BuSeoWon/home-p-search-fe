import axiosInstance from '../config/axiosInstance';

axiosInstance.interceptors.request.use(
  (config) => {
    // 요청을 보내기 전에 수행할 작업들을 정의합니다.
    // 예: 헤더 설정, 토큰 첨부 등
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);
