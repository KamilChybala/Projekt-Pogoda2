import React from "react";

interface GlassButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  active?: boolean;
}

export const GlassButton: React.FC<GlassButtonProps> = ({
  active,
  className,
  children,
  ...rest
}) => {
  return (
    <button
      className={`px-3 py-1.5 rounded-full text-xs font-medium tracking-wide border transition
      ${active ? "bg-white/80 text-slate-900 border-white" : "bg-white/10 text-white border-white/40 hover:bg-white/15"}
      ${className ?? ""}`}
      {...rest}
    >
      {children}
    </button>
  );
};

