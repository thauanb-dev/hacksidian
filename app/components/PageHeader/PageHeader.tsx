type PageHeaderProps = {
  icon: string;
  title: string;
  description?: string;
};

export default function PageHeader({ icon, title, description }: PageHeaderProps) {
  return (
    <div className="mb-8 px-15 pt-12">
      <div className="mb-3 text-5xl">{icon}</div>
      <h1 className="text-4xl font-bold tracking-tight text-[#e6e6e5]">{title}</h1>
      {description && (
        <p className="mt-2 text-sm text-[rgba(255,255,255,0.45)]">{description}</p>
      )}
    </div>
  );
}
