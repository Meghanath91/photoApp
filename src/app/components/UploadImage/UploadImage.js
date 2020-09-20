import React, { useState } from "react";
import { DropzoneArea } from "material-ui-dropzone";

export default function UploadImage() {
  const [upload, setUpload] = useState();

  const handleChange = (files) => {
    setUpload(files);
    console.log(upload);
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
