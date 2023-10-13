import PreviewIcon from "@mui/icons-material/Preview";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteObject, getStorage, ref } from "firebase/storage";

export default function ShowFile({ link }: ShowFile) {
  const openImage = (imageLink: string) => {
    window.open(imageLink);
  };

  const storage = getStorage();

  const desertRef:Function = (path:string)=>{
   return ref(storage,path)
  }

  const deleteImage = (imglink:string)=>{
    deleteObject(desertRef(imglink)).then(()=>{
      console.log("sucess")
    }).catch((err)=>{
      console.log(err)
    })
  }

  return (
    <div className="flex flex-col items-center gap-10">
      <div className=" h-64 w-72 bg-slate-300 ">
        <img src={link} />
      </div>
      <div className="gap-5">
        <PreviewIcon
          onClick={() => {
            openImage(link);
          }}
        />
        <DeleteIcon  onClick={()=>{
          deleteImage(link)
        }}/>
      </div>
    </div>
  );
}
