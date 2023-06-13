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

const estimateService = new EstimateService([]);
export const EstimateCtx = createContext(estimateService);

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-estimate' element={<Estimate />} />
        <Route path='/new-receipt' element={<Receipt />} />
		<Route path="/my-estimates" element={<MyEstimates />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
