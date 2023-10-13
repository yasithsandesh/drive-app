import { fetchFiles } from "~/hook/fetchFiles";
import Header from "../Header/Header";
import ShowFile from "../ShowFile/ShowFile";
import { getStorage } from "firebase/storage";

export default function HomeCom(){

    let {fileList} = fetchFiles();

 

    return(
        <main className="flex flex-col min-h-screen bg-gradient-to-b from-[#1c1426] to-[#15162c]">
            <Header/>

            <div className="flex flex-wrap p-48 justify-center items-center gap-5 ">
                {fileList.map((file:any)=>(
                    <ShowFile link={file.imageLink}/>
                ))}
            </div>
        </main>
    )
}