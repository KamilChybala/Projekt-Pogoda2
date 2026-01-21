import React from "react";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { GlassPanel } from "./components/layout/GlassPanel";

export default function App() {
  return (
    <div className="min-h-screen px-4 py-8">
      <div className="mx-auto w-full max-w-5xl">
        <header className="mb-6 flex items-center justify-between">
          <div>
            <div className="text-xs tracking-[0.25em] text-white/70">CLEAR WATER</div>
            <div className="text-2xl font-semibold">Pogodynka</div>
          </div>
          <nav className="flex items-center gap-4 text-sm text-white/85">
            <Link className="hover:text-white" to="/miasta">
              Miasta
            </Link>
            <Link className="hover:text-white" to="/ulubione">
              Ulubione
            </Link>
          </nav>
        </header>

        <GlassPanel className="p-5">
          <Routes>
            <Route path="/" element={<Navigate to="/miasta" replace />} />
            <Route
              path="/miasta"
              element={<div className="text-white/90">Ekran główny (w budowie)</div>}
            />
            <Route
              path="/ulubione"
              element={<div className="text-white/90">Ulubione (w budowie)</div>}
            />
            <Route path="*" element={<div className="text-white/90">404</div>} />
          </Routes>
        </GlassPanel>
      </div>
    </div>
  );
}

