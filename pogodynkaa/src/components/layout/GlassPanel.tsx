import type { PropsWithChildren } from "react";
import React from "react";

interface GlassPanelProps extends PropsWithChildren {
  className?: string;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({ children, className }) => {
  return (
    <div
      className={`rounded-3xl bg-white/15 border border-white/25 shadow-glass backdrop-blur-2xl ${className ?? ""}`}
    >
      {children}
    </div>
  );
};

