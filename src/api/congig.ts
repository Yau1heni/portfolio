import axios from "axios";
import * as process from 'process';

export const baseURL = process.env.REACT_APP_BACK_URL;
export const instance = axios.create({
  baseURL,
  withCredentials: true,
});
