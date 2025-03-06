import { Field } from "formik";

export const Title = () => {
  return (
    <div className="p-field m-2">
      <label htmlFor="price">Naslov</label>
      <Field
        id="title"
        name="title"
        type="text"
        className="p-inputtext p-component my-2"
      />
    </div>
  );
};
