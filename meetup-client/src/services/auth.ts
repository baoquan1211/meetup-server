import { Token, User } from "@/models/auth";
import apiInstance from "./instance";

export type LoginRequest = {
  email: string;
  password: string;
};

export type SignUpRequest = {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
};

export const signUp = async (data: SignUpRequest) => {
  const response = await apiInstance.post<User>(
    `/authentication-service/api/v1/auth/signup`,
    data
  );
  return response;
};

export const login = async (data: LoginRequest) => {
  const response = await apiInstance.post<Token>(
    `/authentication-service/api/v1/auth/login`,
    data
  );
  return response;
};

export const getUser = async () => {
  const response = await apiInstance.get<User>(
    `/authentication-service/api/v1/user/profile`
  );
  return response;
};
