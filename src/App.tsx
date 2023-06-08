import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Estimate from "./pages/Estimate";
import Receipt from "./pages/Receipt";
import Pricing from "./pages/Pricing";

export type Task = {
	reference: string;
	description: string;
	quantity: number;
	unitPrice: number;
	vat: number;
	deposit: number;
}

export type Estimate = {
	id?: string;
	estimateNumber: string;
	estimateDate: Date;
	paymentDate: Date;
	title: string;
	tasks: Task[];
}

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/new-estimate' element={<Estimate />} />
        <Route path='/new-receipt' element={<Receipt />} />
        <Route path='/pricing' element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;