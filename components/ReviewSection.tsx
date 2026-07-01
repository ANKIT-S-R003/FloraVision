import ReviewCard from "./ReviewCard";
import SectionTitle from "./SectionTitle";
import { REVIEWS } from "@/constants";

export default function ReviewSection() {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title="Customer Review" />
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REVIEWS.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
