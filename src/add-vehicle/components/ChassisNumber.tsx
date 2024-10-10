import { Field } from "formik";
import CustomErrorMessage from "../../components/error-components/ErrorMessage";

export const ChassisNumber = () => {
  return (
    <div className="p-field m-2">
      <label htmlFor="chassisNumber">Broj šasije</label>
      <Field
        id="chassisNumber"
        name="chassisNumber"
        type="text"
        className="p-inputtext p-component my-2"
      />
      <CustomErrorMessage name="chassisNumber" />
    </div>
  );
};
