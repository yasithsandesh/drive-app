import { database } from "firbaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";


let files = collection(database,"files");

export const fetchFiles =()=>{

    const [fileList,setFileList] = useState<ArrayType>([]);

    useEffect(()=>{
        return onSnapshot(files,(res)=>{
         setFileList(
            res.docs.map((item)=>{
                return{...item.data(),id:item.id}
            })
         )
        })
    },[])

    return { fileList };
}