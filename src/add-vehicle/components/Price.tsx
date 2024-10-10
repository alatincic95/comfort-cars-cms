import { Field } from "formik";
import CustomErrorMessage from "../../components/error-components/ErrorMessage";

export const Price = () => {
  return (
    <div className="p-field m-2">
      <label htmlFor="price">Cijena (€)</label>
      <Field
        id="price"
        name="price"
        type="text"
        className="p-inputtext p-component my-2"
        placeholder="npr. 20000"
      />
      <CustomErrorMessage name="price" />
    </div>
  );
};
