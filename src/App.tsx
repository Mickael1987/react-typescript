import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Estimate from "./pages/EstimatePage";
import Receipt from "./pages/Receipt";
import Pricing from "./pages/Pricing";
import { EstimateService } from "./services/estimateService";
import { createContext } from "react";
import MyEstimates from "./pages/MyEstimates";
import EstimateDetails from "./pages/EstimateDetails";

export type Task = {
  reference: string;
  description: string;
  quantity: number;
  unitPrice: number;
  vat: number;
  deposit: number;
};

export type Estimate = {
  id?: string;
  estimateNumber: string;
  estimateDate: Date;
  paymentDate: Date;
  title: string;
  tasks: Task[];
};

const mockData: Estimate[] = [
  {
    id: "1",
    estimateNumber: "123",
    estimateDate: new Date("10/06/2023"),
    paymentDate: new Date("10/07/2023"),
    title: "Super Estimate from Hell",
    tasks: [
      {
        reference: "frfs",
        description: "French Fries",
        quantity: 2,
        unitPrice: 4.99,
        deposit: 0,
        vat: 20,
      },
      {
        reference: "pzz",
        description: "Pizza Regina",
        quantity: 4,
        unitPrice: 12,
        deposit: 5,
        vat: 20,
      },
    ],
  },
  {
    id: "2",
    estimateNumber: "456",
    estimateDate: new Date("12/06/2023"),
    paymentDate: new Date("12/07/2023"),
    title: "Another Great Estimate",
    tasks: [
      {
        reference: "drn",
        description: "Flying Drone",
        quantity: 1,
        unitPrice: 419.99,
        deposit: 100,
        vat: 20,
      },
      {
        reference: "smrtphn",
        description: "iPhone 13",
        quantity: 1,
        unitPrice: 989.6,
        deposit: 200,
        vat: 20,
      },
    ],
  },
  {
    id: "3",
    estimateNumber: "789",
    estimateDate: new Date("15/06/2023"),
    paymentDate: new Date("15/07/2023"),
    title: "LDLC",
    tasks: [
      {
        reference: "Samsung",
        description: "Flying Drone",
        quantity: 1,
        unitPrice: 1519.99,
        deposit: 100,
        vat: 20,
      },
      {
        reference: "Apple",
        description: "iPhone 12",
        quantity: 1,
        unitPrice: 989.6,
        deposit: 200,
        vat: 20,
      },
    ],
  },
  {
    id: "4",
    estimateNumber: "112",
    estimateDate: new Date("16/06/2023"),
    paymentDate: new Date("16/07/2023"),
    title: "Decathlon",
    tasks: [
      {
        reference: "cycle",
        description: "Electric bike",
        quantity: 1,
        unitPrice: 2199.99,
        deposit: 100,
        vat: 20,
      },
      {
        reference: "garanty",
        description: "12 months",
        quantity: 1,
        unitPrice: 89.99,
        deposit: 200,
        vat: 20,
      },
    ],
  },
  {
    id: "5",
    estimateNumber: "113",
    estimateDate: new Date("17/06/2023"),
    paymentDate: new Date("17/07/2023"),
    title: "Porsche",
    tasks: [
      {
        reference: "911",
        description: "cars",
        quantity: 1,
        unitPrice: 94419.99,
        deposit: 100,
        vat: 20,
      },
      {
        reference: "Option",
        description: "Cuir",
        quantity: 1,
        unitPrice: 989.6,
        deposit: 200,
        vat: 20,
      },
    ],
  },
];

const estimateService = new EstimateService(mockData);
export const EstimateCtx = createContext(estimateService);

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-estimate' element={<Estimate />} />
        <Route path='/new-receipt' element={<Receipt />} />
        <Route path='/my-estimates' element={<MyEstimates />} />
		<Route path="/my-estimates/:id" element={<EstimateDetails />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
