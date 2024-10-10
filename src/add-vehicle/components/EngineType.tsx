import { Field } from "formik";
import CustomErrorMessage from "../../components/error-components/ErrorMessage";

export const EngineType = () => {
  return (
    <div className="p-field m-2">
      <label>Vrsta motora</label>
      <div className="grid my-2">
        {["Benzinski", "Dizelski", "Električni", "Hibridni"].map((type) => (
          <div
            className="m-1"
            key={type}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Field
              type="radio"
              id={type}
              name="engineType"
              value={type}
              className="p-radio my-2"
            />
            <label htmlFor={type} style={{ marginLeft: "8px" }}>
              {type}
            </label>
          </div>
        ))}
      </div>
      <CustomErrorMessage name="engineType" />
    </div>
  );
};
