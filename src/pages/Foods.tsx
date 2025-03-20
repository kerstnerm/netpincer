import {useEffect, useState} from "react";
import api from "../api/api.ts";
import {IFood} from "../interfaces/IFood.ts";
import {Card, Table} from "@mantine/core";

const Foods = () => {
    const [foods, setFoods] = useState<IFood[]>([]);

    useEffect(() => {
        api.Food.getFoods().then(res =>{
            console.log(res.data);
            setFoods(res.data);
        });
    }, []);

    const rows = foods.map((food) => (
        <Table.Tr key={food.id}>
            <Table.Td>{food.name}</Table.Td>
            <Table.Td>{food.description}</Table.Td>
            <Table.Td>{food.restaurant.name}</Table.Td>
            <Table.Td>{food.price}</Table.Td>
        </Table.Tr>
    ));

    return <>
        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Table>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Név</Table.Th>
                        <Table.Th>Leírás</Table.Th>
                        <Table.Th>Étterem</Table.Th>
                        <Table.Th>Ár</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </Card>
    </>
}

export default Foods;