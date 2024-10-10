import { Field } from "formik";
import CustomErrorMessage from "../../components/error-components/ErrorMessage";

export const VehicleDescription = () => {
  return (
    <div className="p-field m-2">
      <label htmlFor="description">Opis</label>
      <Field
        as="textarea"
        id="description"
        name="description"
        className="p-inputtext p-component my-2"
        rows={10}
      />
      <CustomErrorMessage name="description" />
    </div>
  );
};
