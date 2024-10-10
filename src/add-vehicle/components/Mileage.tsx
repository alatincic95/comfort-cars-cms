import { Field } from "formik";
import CustomErrorMessage from "../../components/error-components/ErrorMessage";

export const Mileage = () => {
  return (
    <div className="p-field m-2">
      <label htmlFor="mileage">Kilometraža (km)</label>
      <Field
        id="mileage"
        name="mileage"
        type="text"
        className="p-inputtext p-component my-2"
        placeholder="npr. 30000"
      />
      <CustomErrorMessage name="mileage" />
    </div>
  );
};
