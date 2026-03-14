"use client";

import { useMemo, useState } from "react";
import proje4 from "proj4"


type Mode = "UTM_TO_GEO" | "GEO_TO_UTM";

export default function UtmConverter() {
  const [mode, setMode] = useState<Mode>("UTM_TO_GEO");

  // Padrão Bahia (SIRGAS2000 / UTM 24S)
  const [zone, setZone] = useState("24");
  const [hemisphere, setHemisphere] = useState<"S" | "N">("S");

  // UTM -> Geo
  const [easting, setEasting] = useState("");
  const [northing, setNorthing] = useState("");

  // Geo -> UTM
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");

  const canConvert = useMemo(() => {
    if (mode === "UTM_TO_GEO")
      return !!(easting && northing && zone && hemisphere);
    return !!(lat && lng && zone && hemisphere);
  }, [mode, easting, northing, lat, lng, zone, hemisphere]);

  const inputClass =
    "w-full rounded border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] px-3 py-2 text-sm text-[#e6e6e5] placeholder:text-[rgba(255,255,255,0.3)] outline-none transition-colors focus:border-[rgba(255,255,255,0.2)]";

  const inlineInputClass =
    "rounded border border-[rgba(255,255,255,0.07)] bg-[rgba(255,255,255,0.03)] px-2 py-1 text-sm text-[#e6e6e5] outline-none transition-colors focus:border-[rgba(255,255,255,0.2)]";

  return (
    <div className="w-full text-[#e6e6e5]">
      {/* Mode tabs */}
      <div className="flex gap-4 border-b border-[rgba(255,255,255,0.07)]">
        <button
          className={`pb-2 text-sm transition-colors ${
            mode === "UTM_TO_GEO"
              ? "border-b-2 border-[#e6e6e5] font-medium text-[#e6e6e5]"
              : "text-[rgba(255,255,255,0.45)] hover:text-[#e6e6e5]"
          }`}
          onClick={() => setMode("UTM_TO_GEO")}
        >
          UTM → Lat/Lon
        </button>
        <button
          className={`pb-2 text-sm transition-colors ${
            mode === "GEO_TO_UTM"
              ? "border-b-2 border-[#e6e6e5] font-medium text-[#e6e6e5]"
              : "text-[rgba(255,255,255,0.45)] hover:text-[#e6e6e5]"
          }`}
          onClick={() => setMode("GEO_TO_UTM")}
        >
          Lat/Lon → UTM
        </button>

        <div className="ml-auto flex items-center gap-2 pb-2">
          <label className="text-sm text-[rgba(255,255,255,0.45)]">Zona</label>
          <input
            className={`w-16 ${inlineInputClass}`}
            value={zone}
            onChange={(e) => setZone(e.target.value.replace(/\D/g, ""))}
            placeholder="24"
          />
          <select
            className={inlineInputClass}
            value={hemisphere}
            onChange={(e) => setHemisphere(e.target.value as "S" | "N")}
          >
            <option value="S">Sul (S)</option>
            <option value="N">Norte (N)</option>
          </select>
        </div>
      </div>

      <div className="mt-4 grid gap-3">
        {mode === "UTM_TO_GEO" ? (
          <>
            <input
              className={inputClass}
              placeholder="LESTE (Easting) — ex: 534123.22"
              value={easting}
              onChange={(e) => setEasting(e.target.value)}
            />
            <input
              className={inputClass}
              placeholder="NORTE (Northing) — ex: 8574123.55"
              value={northing}
              onChange={(e) => setNorthing(e.target.value)}
            />
          </>
        ) : (
          <>
            <input
              className={inputClass}
              placeholder="Latitude — ex: -12.934234"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
            <input
              className={inputClass}
              placeholder="Longitude — ex: -38.412312"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
            />
          </>
        )}

        <button
          disabled={!canConvert}
          className="rounded bg-[rgba(255,255,255,0.07)] px-4 py-2 text-sm transition-colors hover:bg-[rgba(255,255,255,0.12)] disabled:cursor-not-allowed disabled:opacity-30"
          onClick={() => alert("No passo 2 eu ligo a conversão de verdade 🙂")}
        >
          Converter
        </button>
      </div>
    </div>
  );
}
