import axiosInstance from "./axios.config.ts";
import {IFood} from "../interfaces/IFood.ts";

const Food = {
    getFoods: () => axiosInstance.get<IFood[]>(`/api/food`)
}

const api = {Food};

export default api;