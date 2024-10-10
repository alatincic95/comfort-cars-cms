import { Field } from "formik";
import CustomErrorMessage from "../../components/error-components/ErrorMessage";

export const Transmission = () => {
  return (
    <div className="p-field m-2">
      <label>Mjenjač</label>
      <div className="my-2" style={{ display: "flex", gap: "20px" }}>
        {["Transmisijski", "Automatski"].map((transmission) => (
          <div
            key={transmission}
            style={{ display: "flex", alignItems: "center" }}
          >
            <Field
              type="radio"
              id={transmission}
              name="transmission"
              value={transmission}
              className="p-radio my-2"
            />
            <label htmlFor={transmission} style={{ marginLeft: "8px" }}>
              {transmission}
            </label>
          </div>
        ))}
      </div>
      <CustomErrorMessage name="transmission" />
    </div>
  );
};
