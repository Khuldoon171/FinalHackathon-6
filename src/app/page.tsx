import Footer from "@/components/footer";
import Group115, { Furniture, Inspir, Product } from "@/components/group115";
import Header from "@/components/header";


import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Group115/>
      <Product/>
      <Inspir/>
      <Furniture/>
    </main>
  );
}
