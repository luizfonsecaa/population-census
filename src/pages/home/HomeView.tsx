import { GeoJSON } from "react-leaflet/GeoJSON";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import { HomeController } from "./HomeController";
import { Modal } from "../../components/modal";


export function HomeView() {
  const { neighborhoods, handleGetPopulation, isOpen, populationData, setIsOpen } =
    HomeController();
  return (
    <>
      {isOpen && (
       <Modal populationData={populationData} setIsOpen={setIsOpen} />
      )}

      <MapContainer
        style={{ height: "100vh", zIndex: 0 }}
        bounds={[
          [-23.234708, -45.928813],
          [-23.198917, -45.900761],
        ]}
        zoom={15}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=BcCw9iWXRyBExU9XfTBr"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {neighborhoods && (
          <GeoJSON
            data={neighborhoods}
            style={{ color: "#6c58ff" }}
            eventHandlers={{
              click: (event) => handleGetPopulation(event.sourceTarget.feature),
            }}
          />
        )}
      </MapContainer>
    </>
  );
}
