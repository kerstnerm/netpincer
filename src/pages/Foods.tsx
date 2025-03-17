import {useEffect, useState} from "react";
import api from "../api/api.ts";
import {IFood} from "../interfaces/IFood.ts";

const Foods = () => {
    const [foods, setFoods] = useState<IFood[]>([]);

    useEffect(() => {
        api.Food.getFoods().then(res =>{
            console.log(res.data);
            setFoods(res.data);
        });
    }, []);

    return <>
        {JSON.stringify(foods)}
    </>;
}

export default Foods;