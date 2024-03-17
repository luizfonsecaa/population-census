import { useState, useEffect } from "react";
import { populationApi } from "../../services/populationApi";
import { neighborhoodsType, populationDataType, populationType, propertiesType } from "./HomeModal";
import { IPopulation } from "../../dto/populationType";
import { neighborhoodApi } from "../../services/neighborhoodApi";

export function HomeController() {
  const [neighborhoods, setNeighborhoods] = useState<neighborhoodsType>();
  const [isOpen, setIsOpen] = useState(false);
  const [populationData, setPopulationData] = useState<populationDataType>({} as populationDataType);

  async function _fetchNeighborhoods() {
    try {
      const data = await neighborhoodApi();
      setNeighborhoods(data as neighborhoodsType);
    } catch (error) {
      console.error(error);
    }
  }

  async function _fetchPopulation(): Promise<populationType[] | undefined> {
    try {
      const data = await populationApi();
      const response = data.map(
        ({ ano, id_geometria, populacao }: IPopulation) => ({
          ano,
          populacao,
          id: id_geometria,
        })
      );
      return response;
    } catch (error) {
      console.error(error);
    }
  }
  
  async function handleGetPopulation({
    properties,
  }: {
    properties: propertiesType;
  }) {
    const reponse = await _fetchPopulation();
    if (reponse && reponse?.length > 0) {
      const data = reponse?.filter((item) => item.id == properties.id);
      console.log({
        properties,
        data: data.map((item) => ({ name: `Ano ${item.ano}`, populacao: item.populacao })),
      })
      setPopulationData({
        properties,
        data: data.map((item) => ({ name: `Ano ${item.ano}`, populacao: item.populacao, })),
      })
      setIsOpen(true);
    }
  }

  useEffect(() => {
    _fetchNeighborhoods();
  }, []);

  return {
    neighborhoods,
    handleGetPopulation,
    isOpen,
    setIsOpen,
    populationData,
  };
}
