import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import Button from "~/components/Button/Button";
import HomeCom from "~/components/HomeCom/HomeCom";

export default function Home() {
  const [login, setLogin] = useState("ok");

  return (
    <>
   
        <HomeCom/>
   
    </>
  );
}
