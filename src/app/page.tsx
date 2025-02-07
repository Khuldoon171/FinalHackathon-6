
import Group115, { Furniture, Inspir, Product } from "@/components/group115";



import Image from "next/image";
import ProductCards from "./Products/page";

export default function Home() {
  return (
    <main>
      <Group115/>
      <Product/>
      <ProductCards/>
      <Inspir/>
      <Furniture/>
    </main>
  );
}
