import { useForm, SubmitHandler, useFieldArray } from "react-hook-form";
import { Estimate } from "../App";
import styles from "./EstimateForm.module.css";

export default function EstimateForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Estimate>();
  const onSubmit: SubmitHandler<Estimate> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor='estimateNumber' className={styles.formlabel}>
        Estimate Number
      </label>
      <input
        className={styles.forminput}
        type='text'
        placeholder='Estimate Number'
        id='estimateNumber'
        {...register("estimateNumber", { required: true })}
      />
      <span className={styles.formerror}>
        {errors.estimateNumber && "Please, enter an estimate number"}
      </span>

      <label htmlFor='estimateDate' className={styles.formlabel}>
        Estimate Date
      </label>
      <input
        className={styles.forminput}
        type='date'
        id='estimateDate'
        {...register("estimateDate", { required: true })}
      />
      <span className={styles.formerror}>
        {errors.estimateDate && "Please, enter an estimate date"}
      </span>

      <label htmlFor='paymentDate'>Estimate Date</label>
      <input
        className={styles.forminput}
        type='date'
        id='paymentDate'
        {...register("paymentDate", { required: true })}
      />
      <span className={styles.formerror}>
        {errors.paymentDate && "Please, enter a payment date"}
      </span>

      <input type='submit' value='Create Estimate' className={styles.formbutton} />
    </form>
  );
}
