import axios from "axios";

import { BASE_URL } from "../utils/constants";

type RegisterParams = {
  fullName: string;
  email: string;
  phone: string;
  password: string;
};

type LoginParams = {
  email: string;
  password: string;
};

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export async function register({
  fullName,
  email,
  phone,
  password,
}: RegisterParams) {
  const response = await axiosInstance.post("/register", {
    fullName,
    email,
    phone,
    password,
    isAdmin: false,
  });

  return response;
}

export async function login({ email, password }: LoginParams) {
  const response = await axiosInstance.post("/login", {
    email,
    password,
  });

  return response;
}
