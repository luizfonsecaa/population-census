import { IPopulation } from "../../dto/populationType";

export type neighborhoodsType = GeoJSON.GeoJsonObject

export type populationType =  Pick<IPopulation, 'ano' | 'populacao'> & {id:number}

export type populationDataType = {
  properties: Pick<propertiesType, 'name' | 'zona'>;
  data: {name: string, populacao: number}[]
}

export type propertiesType = {
    id: number;
    name: string;
    setor: string;
    zona: string;
  };