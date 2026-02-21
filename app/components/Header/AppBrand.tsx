import { DraftingCompass } from "lucide-react";

export default function AppBrand() {
  return (
    <div className="flex text-left  items-center gap-8 font-semibold">
      <div className="gap-2 flex">
        <span className="h-5 w-5 rounded-full bg-violet-500"></span>
        <a className="hover:text-cyan-300" href="">
          Hacksidian
        </a>
      </div>
      <div className="gap-2 flex">
        <a className="hover:text-cyan-300" href="">
          <div className="gap-2 flex">
            <DraftingCompass />
            UTM
          </div>
        </a>
      </div>
    </div>
  );
}
