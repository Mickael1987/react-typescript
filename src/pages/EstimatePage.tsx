import { Estimate, EstimateCtx } from "../App";
import EstimateForm from "../components/EstimateForm";
import { EstimateService } from "../services/estimateService";
import { useContext } from 'react';

export default function EstimatePage() {

	const estimateSrv = useContext<EstimateService>(EstimateCtx);

	function handleEstimateCreate(data: Estimate) {
		console.log(data);
		estimateSrv.createEstimate(data);
	}
  return (
    <>
      <h3>Create a new estimate</h3>
      <EstimateForm onEstimateCreate={handleEstimateCreate}/>
    </>
  );
}
