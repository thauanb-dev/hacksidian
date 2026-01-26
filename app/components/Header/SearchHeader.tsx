
export default function SearchHeader(){
return (
  <div className="ml-auto w-full max-w-md">
    <input
      className="w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 placeholder:text-slate-400 outline-none focus:border-violet-500/60"
      placeholder="Search page or heading..."
    />
  </div>
);

}