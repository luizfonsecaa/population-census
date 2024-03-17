
export interface INeighborhood {
    type: string,
    name: string,
    crs: {
        type: string,
        properties: {
            name: string
        }
    },
    features: IFeature[]
    
}

interface IFeature {
    "type": string,
    "properties": {
        "id": number,
        "name": string,
        "setor": string,
        "zona": string
    },
    "geometry": {
        "type": string,
        "coordinates": number[][][][]
    },
    "bbox": number[]
}



