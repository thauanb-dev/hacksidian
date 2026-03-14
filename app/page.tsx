import Link from "next/link";
import { DraftingCompass } from "lucide-react";
import PageHeader from "./components/PageHeader/PageHeader";

type ToolCardProps = {
  href: string;
  icon: React.ReactNode;
  title: string;
  description: string;
};

function ToolCard({ href, icon, title, description }: ToolCardProps) {
  return (
    <Link
      href={href}
      className="flex items-start gap-3 rounded-lg border border-[rgba(255,255,255,0.07)] p-4 transition-colors duration-150 hover:bg-[rgba(255,255,255,0.055)]"
    >
      <span className="mt-0.5 shrink-0 text-[rgba(255,255,255,0.45)]">{icon}</span>
      <div>
        <p className="text-sm font-medium text-[#e6e6e5]">{title}</p>
        <p className="mt-0.5 text-xs text-[rgba(255,255,255,0.45)]">{description}</p>
      </div>
    </Link>
  );
}

export default function Home() {
  return (
    <div className="mx-auto max-w-225">
      <PageHeader
        icon="⚡"
        title="Hacksidian"
        description="Uma coleção de ferramentas para hackers."
      />

      <section className="px-15">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-widest text-[rgba(255,255,255,0.45)]">
          Ferramentas
        </h2>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <ToolCard
            href="/tools/utm"
            icon={<DraftingCompass size={16} />}
            title="UTM Converter"
            description="Converta entre coordenadas UTM e Lat/Lon."
          />
        </div>
      </section>
    </div>
  );
}
