import { ProductGrid, Title } from "../components";
import { initialData } from "@/seed/seed";

const produts = initialData.products; 

export default function Home() {
  return (
    <> 
      <Title
      title="Tienda"
      subtitle="Todos los productos"
      classname="mb-2"
      />
      <ProductGrid
      products={produts}/>
    </>
  );
}
