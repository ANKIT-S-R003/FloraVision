import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";
import { TOP_SELLING_PLANTS } from "@/constants";

export default function TopSellingSection() {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Our Top Selling Plants" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TOP_SELLING_PLANTS.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
}
