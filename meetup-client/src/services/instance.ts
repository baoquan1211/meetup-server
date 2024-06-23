import useLogout from "@/hooks/auth/useLogout";
import axios, { AxiosResponse } from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_SERVER_URL,
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = localStorage.getItem("access_token");
    config.headers.Authorization = accessToken;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export interface SuccessResponse<T> {
  statusText: "success";
  status: number;
  data: T;
}

export interface ErrorResponse {
  statusText: "error";
  status: number;
  detail: string;
}

export class ErrorResponseImpl implements ErrorResponse {
  status: number;
  statusText: "error";
  detail: string;

  constructor(status: number, detail: string) {
    this.status = status;
    this.statusText = "error";
    this.detail = detail;
  }
}

instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    const res = {
      data: response.data.metadata ?? response.data.data,
      status: response.status,
      statusText: "success",
    } as AxiosResponse<SuccessResponse<unknown>>;
    return res;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    //return Promise.reject(error);

    const { response, config } = error;
    if (
      (response.status >= 400 && config.url === "/auth/me") ||
      response.status === 403 ||
      response.status === 401
    ) {
      const logout = useLogout();
      logout();
    }

    const _response: ErrorResponse = new ErrorResponseImpl(
      response.status,
      response.data.message
    );
    return Promise.reject(_response);
  }
);

export default instance;
