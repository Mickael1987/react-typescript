import { useForm, useFieldArray } from "react-hook-form";
import { Estimate } from "../App";
import styles from "./EstimateForm.module.css";

type estimateFormProps = {
  onEstimateCreate: (data: Estimate) => void;
};

export default function EstimateForm({ onEstimateCreate }: estimateFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Estimate>();

  const { fields, append, remove } = useFieldArray({
    name: "tasks",
    control,
  });

  function onSubmit(data: Estimate) {
    onEstimateCreate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor='estimateTitle' className={styles.formlabel}>Estimate Title</label>
      <input
        {...register("title", { required: true })}
        id='estimateTitle'
		placeholder="Estimate Title"
        className={styles.forminput}
      />
      <span className={styles.formerror}>
        {errors.title && "Please, enter an estimate title"}
      </span>
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

      <label htmlFor='paymentDate'>Payement Date</label>
      <input
        className={styles.forminput}
        type='date'
        id='paymentDate'
        {...register("paymentDate", { required: true })}
      />
      <span className={styles.formerror}>
        {errors.paymentDate && "Please, enter a payment date"}
      </span>

      {fields.map((field, index) => {
        return (
          <div key={field.id}>
            <section className={styles.task}>
              <div>
                <label htmlFor='taskReference' className={styles.formlabel}>
                  Item Reference
                </label>
                <input
                  type='text'
                  id='taskReference'
                  {...register(`tasks.${index}.reference` as const, {
                    required: true,
                  })}
                  className={styles.forminput}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.reference &&
                    "Please, enter a reference"}
                </div>
              </div>

              <div>
                <label htmlFor='taskDescription' className={styles.formlabel}>
                  Item Description
                </label>
              </div>
              <input
                type='text'
                id='taskDescription'
                {...register(`tasks.${index}.description` as const, {
                  required: true,
                })}
                className={styles.forminput}
              />
              <div className={styles.formerror}>
                {errors?.tasks?.[index]?.description &&
                  "please, enter a description"}
              </div>

              <div>
                <label htmlFor='taskQuantity' className={styles.formlabel}>
                  Item Quantity
                </label>
              </div>
              <input
                type='number'
                id='taskQuantity'
                {...register(`tasks.${index}.quantity` as const, {
                  required: true,
                })}
                className={styles.forminput}
              />
              <div className={styles.formerror}>
                {errors?.tasks?.[index]?.quantity && "please, enter a quantity"}
              </div>

              <div>
                <label htmlFor='taskUnitPrice' className={styles.formlabel}>
                  Item Unit Price
                </label>
              </div>
              <input
                type='text'
                id='taskUnitPrice'
                {...register(`tasks.${index}.unitPrice` as const, {
                  required: true,
                })}
                className={styles.forminput}
              />
              <div className={styles.formerror}>
                {errors?.tasks?.[index]?.unitPrice &&
                  "please, enter a unit price"}
              </div>

              <div>
                <label htmlFor='taskVAT' className={styles.formlabel}>
                  VAT (in %)
                </label>
                <input
                  type='text'
                  id='taskVAT'
                  {...register(`tasks.${index}.vat` as const, {
                    required: true,
                  })}
                  className={styles.forminput}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.vat &&
                    "please, enter a VAT (WITHOUT %"}
                </div>
              </div>

              <div>
                <label htmlFor='taskDeposit' className={styles.formlabel}>
                  Deposit
                </label>
                <input
                  type='text'
                  id='taskDeposit'
                  {...register(`tasks.${index}.deposit` as const, {
                    required: true,
                  })}
                  className={styles.forminput}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.deposit &&
                    "please, enter the deposit amount"}
                </div>
              </div>
              <button
                type='button'
                onClick={() => {
                  remove(index);
                }}
                className={styles.delete}
              >
                Delete
              </button>
            </section>
          </div>
        );
      })}
      <button
        type='button'
        onClick={() => {
          append({
            reference: "12345",
            description: "Describe",
            quantity: 1,
            unitPrice: 0,
            vat: 20,
            deposit: 0,
          });
        }}
        className={styles.formbutton}
      >
        Add Item
      </button>

      <input
        type='submit'
        value='Create Estimate'
        className={styles.formbutton}
      />
    </form>
  );
}
