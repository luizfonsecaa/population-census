import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmark } from '@fortawesome/free-solid-svg-icons';
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

type ModalType = {
    setIsOpen: (value: boolean) => void;
    populationData: {
        properties: {name: string, zona: string};
        data: {name: string, populacao: number}[]
      }
} 

export function Modal({populationData, setIsOpen} : ModalType) {
  return (
    <div data-test='modal' className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-slate-900 bg-opacity-50 z-50">
      <div className="bg-white rounded shadow-lg w-auto">
        <div className="px-4 py-2 flex justify-end">
          <button onClick={() => setIsOpen(false)}>
            <FontAwesomeIcon icon={faXmark} fontSize={25} />
          </button>
        </div>
        <div className="px-4 py-2">
          <div className="flex items-center justify-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              fontSize={18}
              color="#3f3f46"
            />
            <h2 className="text-xl font-bold ml-1 text-zinc-700">{`Censo Populacional`}</h2>
          </div>
          <p className="text-center font-bold mb-5 text-zinc-500">{`${populationData.properties.name} - Zona ${populationData.properties.zona}`}</p>
          <BarChart
            width={600}
            height={300}
            data={populationData.data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="4 4" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar
              dataKey="populacao"
              name={"População"}
              fill="#059669"
              activeBar={<Rectangle fill="#065f46" stroke="transparent" />}
            />
          </BarChart>
        </div>
      </div>
    </div>
  );
}
