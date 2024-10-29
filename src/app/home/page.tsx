'use client'
import api from "@/src/lib/api";
import { useEffect } from "react";

export default function Home() {
  async function fetching() {
    const response = await api.get('')
    console.log(response.data);
  }
  useEffect(() => {
    fetching()
  }, []);
  return (
    <>
    <h1>Home page example</h1>
    {/* <a href="http://localhost:4000/v1/logout">logout</a>  */}
    </>
  );
}
