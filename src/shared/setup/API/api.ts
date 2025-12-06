import axios from "axios";

const baseURL = process.env.REACT_APP_BASE_URL_API;

export const api = axios.create({ baseURL });
export const apiGeneric = axios.create();

export const getToken = "token:EasyResponse";
export const getTheme = "@ThemeEasyResponse";
