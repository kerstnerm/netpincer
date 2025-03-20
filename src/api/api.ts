import axiosInstance from "./axios.config.ts";
import {IFood} from "../interfaces/IFood.ts";

const Auth = {
    login: (email: string, password: string) => axiosInstance.post<{token: string}>(`/api/User/login`, {email, password})
}

const Food = {
    getFoods: () => axiosInstance.get<IFood[]>(`/api/food`)
}

const api = {Food, Auth};

export default api;