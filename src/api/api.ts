import axiosInstance from "./axios.config.ts";
import {IFood} from "../interfaces/IFood.ts";
import {IRestaurant} from "../interfaces/IRestaurant.ts";

const Auth = {
    login: (email: string, password: string) => axiosInstance.post<{token: string}>(`/api/User/login`, {email, password})
}

const Food = {
    getFoods: () => axiosInstance.get<IFood[]>(`/api/food`),
    getFood: (id: string) => axiosInstance.get<IFood>(`/api/food/${id}`),
    getCategories: () => axiosInstance.get<{name: string, id: number}[]>(`/api/food/categories`),
    createFood : (param: ICreateFood) => axiosInstance.post<IFood>(`/api/food/create`, param),
    updateFood: (id: string, param2: {
        foodCategoryId: number;
        price: number;
        name: string;
        description: string
    }) => axiosInstance.put<IFood>(`/api/food/${id}`, param2),
}

const Restaurant = {
    getRestaurants: () => axiosInstance.get<IRestaurant[]>(`/api/restaurant`),
}

const api = {Food, Auth, Restaurant};

export default api;