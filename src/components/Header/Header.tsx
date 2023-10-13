import {ChangeEvent, useState } from "react";
import FileButton from "../Button/FileButton";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { fileUpload } from "~/API/fileUpload";

export default function Header() {
  const [isFileVisible, setFileVisible] = useState(false);
  const [file,setFile] = useState({})

  const uploadFile = async (event:ChangeEvent<HTMLInputElement>)=>{
    let file = event.target.files?.[0];
    fileUpload(file)
  }

  return (
    <header className="fixed flex h-20 w-full flex-row items-center justify-between p-4">
      <div className="flex flex-row gap-4 p-4">
        <FileButton
          title="ADD A FILE"
          setFileVisible={setFileVisible}
          isFileVisible={isFileVisible}
        />
        {!isFileVisible ? (
          <input
            type="file"
            className="file-input file-input-ghost w-full max-w-xs"
            onChange={(event)=>{uploadFile(event)}}
          />
        ) : null}

      </div>
      <div className=" flex flex-row gap-4">
        <DarkModeIcon style={{ color: "white", width: 30 }} />
      </div>
    </header>
  );
}
