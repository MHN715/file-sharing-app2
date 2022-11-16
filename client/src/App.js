import FileUpload from "./components/FileUpload/FileUpload";
import "./App.css";
import { AiOutlineCloudUpload } from "react-icons/ai";

export default function App() {
  return (
    <div className="wrapper">
      <div className="heading-wrapper">
        <AiOutlineCloudUpload className="upload-icon" />
        <h1 className="heading">Upload your files</h1>
      </div>

      <FileUpload />
    </div>
  );
}
