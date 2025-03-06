import { useFormikContext } from "formik";
import { SetStateAction } from "react";

export const AddVehicleImages = ({
  setImagePreviewUrls,
  imagePreviewUrls,
}: {
  setImagePreviewUrls: (value: SetStateAction<string[]>) => void;
  imagePreviewUrls: string[];
}) => {
  const { setFieldValue } = useFormikContext();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (files) {
      const fileArray = Array.from(files);
      const imageUrls = fileArray.map((file) => URL.createObjectURL(file)); // Create URLs for preview

      setImagePreviewUrls(imageUrls); // Update state with preview URLs
      setFieldValue("images", fileArray); // Store the files in Formik state
    }
  };

  return (
    <div className="p-field m-2">
      <label htmlFor="images">Dodaj fotografije automobila</label>
      <input
        id="images"
        name="images"
        type="file"
        multiple // Allow multiple files
        accept="image/*"
        onChange={handleFileChange}
        className="p-inputtext p-component my-2"
      />
      <div
        className="p-mt-2"
        style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}
      >
        {imagePreviewUrls.length > 0 &&
          imagePreviewUrls.map((url, index) => (
            <div key={index} style={{ width: "100px" }}>
              <img
                src={url}
                alt={`Preview ${index}`}
                style={{
                  width: "100%", // Set width to 100% of the parent
                  height: "auto",
                  borderRadius: "4px",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          ))}
      </div>
    </div>
  );
};
