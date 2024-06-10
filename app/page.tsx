import AboutUs from "@/components/AboutUs";
import CompanyLocation from "@/components/CompanyLocation";
import Hero from "@/components/Hero";
import ProductCards from "@/components/ProductCards";
import ProductList from "@/components/ProductList";
import ProductMessage from "@/components/ProductMessage";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ProductCards/>
      <ProductList/>
      <ProductMessage/>
      <CompanyLocation/>
    </div>
  );
}
