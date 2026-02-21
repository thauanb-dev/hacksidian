import AppBrand from "@/app/components/Header/AppBrand";

export default function  Header(){
return (
  <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur">
    <div className="mx-1 flex max-w-6xl items-center gap-3 px-4 py-3">
    <AppBrand/>
    </div>
  </header>
);
}