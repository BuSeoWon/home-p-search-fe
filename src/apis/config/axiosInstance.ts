import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // API의 기본 URL 설정
  timeout: 5000, // 요청 제한 시간 설정
  headers: {
    'Content-Type': 'application/json',
    // withCredentials: true,
  },
});

export default instance;
