"use client";

import { useEffect } from "react";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return true;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Navegación por anclas (#id) con View Transitions API cuando el navegador lo soporta.
 * Clic normal con modificadores o enlaces externos no se interceptan.
 */
export function ViewTransitionRoot({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      let a: HTMLAnchorElement | undefined;
      for (const n of e.composedPath()) {
        if (n instanceof HTMLAnchorElement && n.getAttribute("href")) {
          a = n;
          break;
        }
      }
      if (!a?.href) return;

      let url: URL;
      try {
        url = new URL(a.href);
      } catch {
        return;
      }

      if (url.origin !== window.location.origin) return;
      if (url.pathname !== window.location.pathname) return;

      const hash = url.hash;
      if (!hash || hash === "#") return;

      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (!el) return;

      e.preventDefault();

      const go = () => {
        window.history.pushState(null, "", hash);
        el.scrollIntoView({ behavior: "auto", block: "start" });
      };

      if (!prefersReducedMotion() && "startViewTransition" in document) {
        (document as Document & { startViewTransition: (cb: () => void) => void }).startViewTransition(go);
      } else {
        el.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
        window.history.pushState(null, "", hash);
      }
    };

    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return <>{children}</>;
}
