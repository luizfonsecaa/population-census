import axios from "axios";
import { INeighborhood } from "../dto/neighborhoodType";


export async function neighborhoodApi() : Promise<INeighborhood> {
    try {
        const {data} = await axios.get("/bairros-geojson");
        return data;
    } catch (error) {
        throw new Error(String(error));
    }
}
