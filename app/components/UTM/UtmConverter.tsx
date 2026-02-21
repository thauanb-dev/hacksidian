"use client";

import { useMemo, useState } from "react";

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

  return (
    <div className="w-full rounded-xl border border-white/10 bg-white/5 p-4 text-slate-200">
      <div className="flex flex-wrap items-center gap-2">
        <button
          className={`rounded-lg px-3 py-2 text-sm ${mode === "UTM_TO_GEO" ? "bg-white/10" : "bg-transparent"}`}
          onClick={() => setMode("UTM_TO_GEO")}
        >
          UTM → Lat/Lon
        </button>
        <button
          className={`rounded-lg px-3 py-2 text-sm ${mode === "GEO_TO_UTM" ? "bg-white/10" : "bg-transparent"}`}
          onClick={() => setMode("GEO_TO_UTM")}
        >
          Lat/Lon → UTM
        </button>

        <div className="ml-auto flex items-center gap-2">
          <label className="text-sm opacity-80">Zona</label>
          <input
            className="w-16 rounded-lg border border-white/10 bg-black/20 px-2 py-1 text-sm outline-none"
            value={zone}
            onChange={(e) => setZone(e.target.value.replace(/\D/g, ""))}
            placeholder="24"
          />
          <select
            className="rounded-lg border border-white/10 bg-black/20 px-2 py-1 text-sm outline-none"
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
              className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none"
              placeholder="LESTE (Easting) — ex: 534123.22"
              value={easting}
              onChange={(e) => setEasting(e.target.value)}
            />
            <input
              className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none"
              placeholder="NORTE (Northing) — ex: 8574123.55"
              value={northing}
              onChange={(e) => setNorthing(e.target.value)}
            />
          </>
        ) : (
          <>
            <input
              className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none"
              placeholder="Latitude — ex: -12.934234"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
            <input
              className="w-full rounded-lg border border-white/10 bg-black/20 px-3 py-2 text-sm outline-none"
              placeholder="Longitude — ex: -38.412312"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
            />
          </>
        )}

        <button
          disabled={!canConvert}
          className="rounded-lg bg-white/10 px-3 py-2 text-sm disabled:opacity-40"
          onClick={() => alert("No passo 2 eu ligo a conversão de verdade 🙂")}
        >
          Converter
        </button>
      </div>
    </div>
  );
}
