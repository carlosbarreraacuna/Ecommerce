import { titleFont } from "@/config/fonts";
import Image from "next/image";
import { Title } from "../components";

export default function Home() {
  return (
    <> 
      <Title
      title="Tienda"
      subtitle="Todos los productos"
      classname="mb-2"
      />
    </>
  );
}
