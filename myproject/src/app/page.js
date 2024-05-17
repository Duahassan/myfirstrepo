'use client'
import styles from "./page.module.css";
import Navbar from "./navbar";
import User from "@/User";
import { useState } from "react";

export default function Home() {
  const[name, setName]= useState("Dua")

  const Rename=()=>{
    setName("Learn here")

  }
  const Innercomponent= ()=>{
    return(

      <h1>Innercomponent</h1>
    )
  }
  return (
    <main className={styles.main}>
      <Navbar/>
      <User name="User"/>
      <h1>Events , functions and states {name}</h1>
      <Innercomponent/>
      <button onClick={()=>Rename()}>Click me</button>
      

    </main>
  );
}
