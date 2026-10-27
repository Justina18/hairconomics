import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { modalVariants } from "../motion";

type Props = { open: boolean; onClose: () => void; children: ReactNode };

export default function Dialog({ open, onClose, children }: Props) {
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => {
    if (!open) return;
    const h = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", h);
    return () => document.removeEventListener("keydown", h);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.2 } }}
          exit={{ opacity: 0, transition: { duration: 0.16 } }}
          role="dialog"
          aria-modal="true"
          onClick={(e) => e.target === e.currentTarget && onClose()}
          className="fixed inset-0 z-60 flex items-center justify-center bg-navy/60 p-4"
        >
          <motion.div
            variants={modalVariants}
            initial={prefersReducedMotion ? false : "hidden"}
            animate={prefersReducedMotion ? undefined : "visible"}
            exit={prefersReducedMotion ? { opacity: 0 } : "exit"}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-auto rounded-xl bg-paper p-5 shadow-2xl sm:p-8"
          >
            <button aria-label="Close" onClick={onClose} className="absolute right-3 top-2 text-3xl transition-transform hover:rotate-90 focus:outline-none focus:ring-2 focus:ring-electric">×</button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
