import React from "react";
import { ErrorMessage } from "formik";

interface CustomErrorMessageProps {
  name: string;
}

const CustomErrorMessage: React.FC<CustomErrorMessageProps> = ({ name }) => {
  return (
    <ErrorMessage
      className="max-w-full"
      name={name}
      render={(msg) => (
        <div style={{ color: "red" }}>
          <span style={{ marginRight: "5px" }}>⚠️</span> {msg}
        </div>
      )}
    />
  );
};

export default CustomErrorMessage;
