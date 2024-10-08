import { useStore } from "@nanostores/react";
import { $feature } from "../stores/feature";

export default function FeatureSelect() {
  const feature = useStore($feature);
  const redUnderline =
    "relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-1/2 after:h-1 after:bg-soft-red lg:after:w-full";

  return (
    <div className="flex w-full max-w-[45.625rem] flex-col px-8 text-center tracking-wide *:border-t-[1px] *:border-soft-blue *:border-opacity-20 lg:flex-row lg:*:border-b-[1px] lg:*:border-t-0">
      {["Simple Bookmarking", "Speedy Searching", "Easy Sharing"].map(
        (item, index) => (
          <button
            className={`w-full py-5 last-of-type:border-b-[1px] hover:text-soft-red focus:text-soft-red ${feature === index ? redUnderline : ""}`}
            onClick={() => $feature.set(index)}
            key={index}
          >
            {item}
          </button>
        ),
      )}
    </div>
  );
}
