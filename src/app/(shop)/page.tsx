import { titleFont } from "@/config/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className='${titleFont.className} '>hola mundo</h1>
      <h1 className='${titleFont.className} font-bold'>prueba 2</h1> 
      
    </main>
  );
}
