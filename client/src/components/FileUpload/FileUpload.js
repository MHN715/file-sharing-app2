import React, { Fragment, useEffect, useState } from "react";
import Message from "../Message";
import Progress from "../Progress";
import axios from "axios";
import "./fileupload.css";

const FileUpload = () => {
  const [files, setFiles] = useState({});
  // const [fileNames, setFileNames] = useState([]);
  // const [uploadedFiles, setUploadedFiles] = useState({});
  const [message, setMessage] = useState("");
  const [uploadPercentage, setUploadPercentage] = useState(0);
  const [filesInInput, setFilesInInput] = useState(false);

  const onChange = (e) => {
    setFiles(e.target.files);
  };

  useEffect(() => {
    if (files.length > 0) {
      console.log("files uploaded");
      setFilesInInput(true);
    } else {
      console.log("no files in input");
      setFilesInInput(false);
    }
  }, [files]);

  console.log(typeof files, files);
  Object.entries(files).map((entry) => {
    return console.log(entry[1].name);
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    // formData.append("file", file);
    // console.log(e.target);

    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }

    try {
      const res = await axios.post("http://localhost:3020/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          setUploadPercentage(
            parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            )
          );
        },
      });

      // Clear percentage
      setTimeout(() => setUploadPercentage(0), 2000);
      console.log(e.target);
      e.target.reset();

      console.log(res);
      // const { fileName, filePath } = res.data;

      // setUploadedFiles({ fileName, filePath });

      // setMessage("File Uploaded");
    } catch (err) {
      if (err.response.status === 500) {
        setMessage("There was a problem with the server");
      } else {
        setMessage(err.response.data.msg);
      }
      setUploadPercentage(0);
    }
  };

  return (
    <Fragment>
      {/* {message ? <Message msg={message} /> : null} */}
      <form onSubmit={onSubmit} className="form">
        {/* <div> */}
        <input
          type="file"
          id="files"
          onChange={onChange}
          multiple
          required
          className="input"
        />
        {/* <label htmlFor="files">{filenames}</label> */}
        {/* </div> */}

        {/* <input type="submit" value="Upload" /> */}
      </form>
      {/* <button id="submit" style="grid-column: span 2" type="submit">
        Share
      </button> */}
      <Progress percentage={uploadPercentage} />
      {/* {uploadedFiles ? (
        <div>
          <div>
            <h3>{uploadedFiles.fileName}</h3>
            <img
              style={{ width: "100%" }}
              src={uploadedFiles.filePath}
              alt=""
            />
          </div>
        </div>
      ) : null} */}
      <div>
        {Object.entries(files).map((item, index) => {
          return <div key={item[1].name + index}>{item[1].name}</div>;
        })}
      </div>
    </Fragment>
  );
};

export default FileUpload;
