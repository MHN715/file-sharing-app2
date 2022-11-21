import { useState } from "react";
import FileUpload from "./components/FileUpload/FileUpload";
import "./App.css";
import { AiOutlineCloudUpload } from "react-icons/ai";
import LinksToCopy from "./components/LinksToCopy/LinksToCopy";
import Progress from "./components/progress/Progress";
import ContextStates from "./context/ContextStates";

export default function App() {
  const [uploadPercentage, setUploadPercentage] = useState(0);

  return (
    <ContextStates.Provider value={{ setUploadPercentage, uploadPercentage }}>
      <div className="wrapper">
        <div className="heading-wrapper">
          <AiOutlineCloudUpload className="upload-icon" />
          <h1 className="heading">Upload your files</h1>
        </div>

        <FileUpload />
        <LinksToCopy />
        <Progress percentage={uploadPercentage} />
      </div>
    </ContextStates.Provider>
  );
}
