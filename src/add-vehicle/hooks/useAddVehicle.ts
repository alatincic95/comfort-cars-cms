import { useState } from "react";

interface VehicleFormValues {
  images: File[];
  price: string;
  yearOfMake: string;
  mileage: string;
  engineType: string;
  transmission: string;
  enginePower: string;
  chassisNumber: string;
  description: string;
}

const useAddVehicle = () => {
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);

  const handleSubmit = (values: VehicleFormValues) => {
    const formData = new FormData();

    // Append each field to the FormData object
    formData.append("price", values.price);
    formData.append("year", values.yearOfMake);
    formData.append("mileage", values.mileage);
    formData.append("engineType", values.engineType);
    formData.append("transmission", values.transmission);
    formData.append("enginePower", values.enginePower);
    formData.append("chassisNumber", values.chassisNumber);
    formData.append("description", values.description);

    // Append each image file to FormData
    values.images.forEach((file: File) => {
      formData.append("images", file); // 'images' should match your backend expectation
    });

    // Send the formData to your API
    fetch("/api/your-endpoint", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return { imagePreviewUrls, setImagePreviewUrls, handleSubmit };
};

export default useAddVehicle;
