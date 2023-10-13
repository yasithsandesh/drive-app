import { storage, database, app } from "firbaseConfig";
import { addDoc, collection } from "firebase/firestore";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Button from "~/components/Button/Button";
import HomeCom from "~/components/HomeCom/HomeCom";



export default function LogIn() {
  const [login, setLogin] = useState("ok");
  const [craete,setCreate] = useState(true)

  const collectionRef = collection(database,"users")

  const createAccount = ()=>{
     addDoc(collectionRef,{}).then(()=>{console.log("sucess")}).catch((err)=>{console.log(err)})
  }

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#1c1426] to-[#15162c]">
       {craete?( <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
          <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
            Drive LogIn
          </h1>
          <div className="flex flex-col gap-4  md:w-[400px]">
    
            <div className=" flex flex-col gap-2">
              <div>
                <label>Email</label>
              </div>

              <div>
                <input className=" h-10 w-full rounded border-slate-200 p-2" />
              </div>
            </div>

            <div className=" flex flex-col gap-2">
              <div>
                <label>Password</label>
              </div>

              <div>
                <input type="password" className=" h-10 w-full rounded border-slate-200 p-2" />
              </div>
            </div>

            <button className=" w-full h-12 ca-btn">Login</button>

            <button className="w-full h-12 l-btn" onClick={()=>{setCreate(false)}}>Create Account</button>
          </div>
        </div>):(
           <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
           <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]">
             Drive Create
           </h1>
           <div className="flex flex-col gap-4">
             <div className=" flex flex-row gap-4">
               <div className=" flex flex-col gap-2">
                 <div>
                   <label>First Name</label>
                 </div>
 
                 <div>
                   <input className=" h-10 w-full rounded border-slate-200 p-2" />
                 </div>
               </div>
 
               <div className=" flex flex-col gap-2">
                 <div>
                   <label>Last Name</label>
                 </div>
 
                 <div>
                   <input className=" h-10 w-full rounded border-slate-200 p-2" />
                 </div>
               </div>
             </div>
 
             <div className=" flex flex-col gap-2">
               <div>
                 <label>Email</label>
               </div>
 
               <div>
                 <input className=" h-10 w-full rounded border-slate-200 p-2" />
               </div>
             </div>
 
             <div className=" flex flex-col gap-2">
               <div>
                 <label>Password</label>
               </div>
 
               <div>
                 <input type="password" className=" h-10 w-full rounded border-slate-200 p-2" />
               </div>
             </div>
 
             <button className=" w-full h-12 ca-btn">Create Account</button>
 
             <button className="w-full h-12 l-btn" onClick={()=>{setCreate(true)}}>Login</button>
           </div>
         </div>
        )}
      </main>
    </>
  );
}
