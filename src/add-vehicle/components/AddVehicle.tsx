import { Formik, Form } from "formik"; // Import Formik components
import { Button } from "primereact/button";
import { addVehicleValidationSchema } from "../helpers/addVehicleValidationSchema";
import useAddVehicle from "../hooks/useAddVehicle";
import { AddVehicleImages } from "./AddVehicleImages";
import { EngineType } from "./EngineType";
import { Transmission } from "./Transmission";
import { Price } from "./Price";
import { ManufacturingYear } from "./ManufacturingYear";
import { Mileage } from "./Mileage";
import { EnginePower } from "./EnginePower";
import { ChassisNumber } from "./ChassisNumber";
import { VehicleDescription } from "./VehicleDescription";

const AddVehicle: React.FC = () => {
  const { imagePreviewUrls, setImagePreviewUrls } = useAddVehicle();

  return (
    <Formik
      initialValues={{
        images: [],
        price: "",
        year: "",
        mileage: "",
        engineType: "",
        transmission: "",
        enginePower: "",
        chassisNumber: "",
        description: "",
      }}
      validationSchema={addVehicleValidationSchema} // Use the extracted validation schema
      onSubmit={(values) => {
        console.log("Form data:", values);
      }}
    >
      {() => (
        <Form className="p-fluid text-white">
          <AddVehicleImages
            imagePreviewUrls={imagePreviewUrls}
            setImagePreviewUrls={setImagePreviewUrls}
          />
          <EngineType />
          <Transmission />
          <Price />
          <ManufacturingYear />
          <Mileage />
          <EnginePower />
          <ChassisNumber />
          <VehicleDescription />
          <div className="flex justify-content-end">
            <Button
              style={{ backgroundColor: "#3e62f0" }}
              type="submit"
              className="w-max border-none font-bold text-center"
            >
              Dodaj vozilo
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default AddVehicle;
