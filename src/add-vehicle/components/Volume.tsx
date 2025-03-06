import { Field } from "formik";

export const Volume = () => {
  return (
    <div className="p-field m-2">
      <label htmlFor="price">Zapremina (ccm)</label>
      <Field
        id="volume"
        name="volume"
        type="text"
        className="p-inputtext p-component my-2"
      />
    </div>
  );
};
