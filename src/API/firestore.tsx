import { storage,database,app } from "firbaseConfig";
import { NextApiRequest,NextApiResponse } from "next";
import { collection,addDoc } from "firebase/firestore";

let files = collection(database,'files')

export const addFiles = (imageLink:any)=>{
    try {
        addDoc(files,{
            imageLink:imageLink
         })
    } catch (error) {
        
    }
}

