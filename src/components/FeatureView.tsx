import { useStore } from "@nanostores/react";
import { $feature } from "../stores/feature";

import feature1 from "../assets/illustration-features-tab-1.svg";
import feature2 from "../assets/illustration-features-tab-2.svg";
import feature3 from "../assets/illustration-features-tab-3.svg";

const featurePics = [feature1, feature2, feature3];
const titles = [
  "Bookmark in one click",
  "Intelligent search",
  "Share your bookmarks",
];
const subtitles = [
  "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.",
  "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.",
  "Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.",
];

export default function FeatureView() {
  const feature = useStore($feature);

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full pr-8">
        <img
          src={featurePics[feature].src}
          alt=""
          className="size-full object-cover"
        />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 px-8 lg:gap-8">
        <div className="flex flex-col text-center lg:gap-4 lg:text-left">
          <h3 className="text-2xl font-medium leading-[3.25rem] lg:text-[2rem]">
            {titles[feature]}
          </h3>

          <p className="text-[15px] opacity-50 lg:text-lg">
            {subtitles[feature]}
          </p>
        </div>

        <button className="h-12 w-fit rounded-md border-2 border-soft-blue bg-soft-blue px-6 font-medium text-white shadow-[0px_8px_8px_-4px_rgba(73,_93,_207,_0.20)] duration-200 hover:bg-white hover:text-soft-blue focus:bg-white focus:text-soft-blue">
          More info
        </button>
      </div>
    </div>
  );
}
