import PageHeader from "@/app/components/PageHeader/PageHeader";
import UtmConverter from "@/app/components/UTM/UtmConverter";

export default function Utm() {
  return (
    <div className="mx-auto max-w-225">
      <PageHeader
        icon="📐"
        title="UTM Converter"
        description="Converta entre coordenadas UTM e geográficas (Lat/Lon) usando SIRGAS2000."
      />
      <div className="px-15">
        <UtmConverter />
      </div>
    </div>
  );
}
