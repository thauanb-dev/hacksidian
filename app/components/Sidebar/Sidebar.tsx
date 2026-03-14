"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, DraftingCompass } from "lucide-react";

type SidebarItemProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

function SidebarItem({ href, icon, label }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center gap-2 rounded px-2 py-1 text-sm transition-colors duration-100 ${
        isActive
          ? "bg-[rgba(255,255,255,0.1)] text-[#e6e6e5]"
          : "text-[rgba(255,255,255,0.45)] hover:bg-[rgba(255,255,255,0.055)] hover:text-[#e6e6e5]"
      }`}
    >
      <span className="w-5 flex-shrink-0 flex items-center">{icon}</span>
      {label}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <aside className="flex h-screen w-60 flex-shrink-0 flex-col border-r border-[rgba(255,255,255,0.07)] bg-[#202020]">
      <div className="flex items-center gap-2 px-3 py-3">
        <span className="h-4 w-4 rounded-full bg-violet-500 flex-shrink-0" />
        <span className="text-sm font-semibold text-[#e6e6e5]">Hacksidian</span>
      </div>

      <nav className="mt-1 flex flex-col gap-0.5 px-2">
        <SidebarItem href="/" icon={<Home size={14} />} label="Home" />
        <SidebarItem href="/tools/utm" icon={<DraftingCompass size={14} />} label="UTM Converter" />
      </nav>
    </aside>
  );
}
