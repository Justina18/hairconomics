import { useEffect, type ReactNode } from "react";

type Props = { open: boolean; onClose: () => void; children: ReactNode };

export default function Dialog({ open, onClose, children }: Props) {
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, onClose]);

  if (!open) return null;
  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-60 flex items-center justify-center bg-navy/60 p-4"
    >
      <div className="relative max-h-[88vh] w-full max-w-md overflow-auto rounded-md bg-paper p-6">
        <button aria-label="Close" onClick={onClose} className="absolute right-3 top-2 text-3xl">×</button>
        {children}
      </div>
    </div>
  );
}
