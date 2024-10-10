import { useState } from "react";

const useAddVehicle = () => {
  const [imagePreviewUrls, setImagePreviewUrls] = useState<string[]>([]);

  return { imagePreviewUrls, setImagePreviewUrls };
};

export default useAddVehicle;
