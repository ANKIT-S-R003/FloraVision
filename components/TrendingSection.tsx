import PlantCard from "./PlantCard";
import SectionTitle from "./SectionTitle";
import { TRENDING_PLANTS } from "@/constants";

export default function TrendingSection() {
  return (
    <section id="plants" className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Our Trendy plants" />
        <div className="flex flex-col gap-16 sm:gap-20">
          {TRENDING_PLANTS.map((plant, index) => (
            <PlantCard key={plant.id} plant={plant} reverse={index % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
