import Image from "next/image";
import Link from "next/link";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <h1>Hello World</h1>
      <button className="btn glass btn-wide btn-primary"><Link href="/users" /*className="p-0 my-5 bg-rose-500 text-white text-xl hover:bg-sky-800" /*tailwind*/>Users</Link></button> 
      <ProductCard/>
    </main>
  );
}
