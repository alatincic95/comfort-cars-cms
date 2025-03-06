import { Field } from "formik";

export const Brand = () => {
  return (
    <div className="p-field m-2">
      <label htmlFor="price">Proizvođač</label>
      <Field
        id="brand"
        name="brand"
        type="text"
        className="p-inputtext p-component my-2"
      />
    </div>
  );
};
