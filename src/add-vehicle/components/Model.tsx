import { Field } from "formik";

export const Model = () => {
  return (
    <div className="p-field m-2">
      <label htmlFor="price">Model</label>
      <Field
        id="model"
        name="model"
        type="text"
        className="p-inputtext p-component my-2"
      />
    </div>
  );
};
