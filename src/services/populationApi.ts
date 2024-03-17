import axios from "axios";
import { IPopulation } from "../dto/populationType";


export async function populationApi() : Promise<IPopulation[]> {
    try {
        const {data} = await axios.get("/populacao");
        return data;
    } catch (error) {
        throw new Error(String(error));
    }
}
