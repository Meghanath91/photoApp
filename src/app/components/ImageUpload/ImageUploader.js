import React, { useState } from "react";
import axios from "axios";

export default function ImageUploader() {
  const [myfile, setFile] = useState(null);
  const onFormSubmit = (e) => {
    e.preventDefault();
    console.log(myfile);
    const formData = new FormData();
    formData.append("myfile", myfile);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post("http://localhost:8080/api/upload", formData, config)
      .then((response) => {
        alert("The file is successfully uploaded");
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h1>File Upload</h1>
        <input
          type="file"
          className="custom-file-input"
          name="myImage"
          onChange={setFile}
        />
        <button className="upload-button" type="submit">
          Upload to DB
        </button>
      </form>
    </div>
  );
}
