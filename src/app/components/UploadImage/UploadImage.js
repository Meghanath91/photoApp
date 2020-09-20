import React from "react";
import { DropzoneArea } from "material-ui-dropzone";

export default function UploadImage({ setUpload }) {
  const handleChange = (files) => {
    setUpload(files);
  };
  return (
    <div>
      <DropzoneArea
        dropzoneText={"Drag and drop an image here or click"}
        onChange={handleChange}
        acceptedFiles={["image/*"]}
        filesLimit={1}
      />
    </div>
  );
}
