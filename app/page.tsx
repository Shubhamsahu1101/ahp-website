import CompanyLocation from "@/components/CompanyLocation";
import Hero from "@/components/Hero";
import ProductCards from "@/components/ProductCards";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ProductCards/>
      <ProductList/>
      <CompanyLocation/>
    </div>
  );
}
