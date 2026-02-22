import { DraftingCompass } from "lucide-react";
import Link from "next/link";


export default function AppBrand() {
  return (
    <div className="flex text-left  items-center gap-8 font-semibold">
      <div className="gap-2 flex">
        <span className="h-5 w-5 rounded-full bg-violet-500"></span>
        <Link className="hover:text-cyan-300" href="/">
          Hacksidian
        </Link>
      </div>
      <div className="gap-2">
        <div className="">
          <Link
            className="hover:text-cyan-300 flex items-center gap-1"
            href="/tools/utm"
          >
            <DraftingCompass />
            UTM
          </Link>
        </div>
      </div>
    </div>
  );
}
