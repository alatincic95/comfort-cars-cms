import { Field } from "formik";
import CustomErrorMessage from "../../components/error-components/ErrorMessage";

export const ManufacturingYear = () => {
  return (
    <div className="p-field m-2">
      <label htmlFor="year">Godina proizvodnje</label>
      <Field
        as="select"
        id="year"
        name="year"
        className="p-inputtext p-component my-2"
        placeholder="Odaberite godinu"
      >
        <option value="" label="Odaberite godinu" />
        {[...Array(40).keys()].map((i) => (
          <option key={i} value={new Date().getFullYear() - i}>
            {new Date().getFullYear() - i}
          </option>
        ))}
      </Field>
      <CustomErrorMessage name="year" />
    </div>
  );
};
