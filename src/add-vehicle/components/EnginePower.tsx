import { Field } from "formik";
import CustomErrorMessage from "../../components/error-components/ErrorMessage";

export const EnginePower = () => {
  return (
    <div className="p-field m-2 ">
      <label htmlFor="enginePower">Snaga motora (kw)</label>
      <Field
        id="enginePower"
        name="enginePower"
        type="text"
        className="p-inputtext p-component my-2"
        placeholder="npr. 100"
      />
      <CustomErrorMessage name="enginePower" />
    </div>
  );
};
