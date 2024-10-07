import { useStore } from "@nanostores/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import { $menuOpen } from "../stores/menuOpen";
import IconFacebook from "./icons/IconFacebook";
import IconTwitter from "./icons/IconTwitter";

export default function MenuDropdown() {
  const menuOpen = useStore($menuOpen);

  function handleResize() {
    if (window.innerWidth > 1024) {
      $menuOpen.set(false);
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    menuOpen &&
    createPortal(
      <div className="fixed inset-0 z-0 flex size-full flex-col justify-between bg-dark-blue bg-opacity-95 px-8 pb-12 pt-24 lg:hidden">
        <div className="flex flex-col gap-6">
          <ul className="flex w-full flex-col">
            {["features", "pricing", "contact"].map((item) => (
              <li className="w-full border-t-[1px] border-white border-opacity-15 p-6 text-center text-xl uppercase tracking-[0.14425rem] text-white last-of-type:border-b-[1px]">
                {item}
              </li>
            ))}
          </ul>

          <button className="h-12 w-full rounded-md border-2 border-white text-xl font-medium uppercase tracking-widest text-white">
            Login
          </button>
        </div>

        <div className="flex w-full flex-row items-center justify-center gap-10">
          <IconFacebook />
          <IconTwitter />
        </div>
      </div>,
      document.body,
    )
  );
}
