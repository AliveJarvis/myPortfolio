import { useEffect, useRef } from "react";

// Only track a fine pointer while the visitor allows motion.
export default function CursorTrail() {
  const trail = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = trail.current;
    if (!element) return;
    const media = window.matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const move = (event: PointerEvent) => {
      element.style.transform = `translate3d(${event.clientX}px,${event.clientY}px,0)`;
      element.dataset.visible = "true";
    };
    const hide = () => {
      delete element.dataset.visible;
    };
    const sync = () => {
      window.removeEventListener("pointermove", move);
      hide();
      if (media.matches)
        window.addEventListener("pointermove", move, { passive: true });
    };
    sync();
    media.addEventListener("change", sync);
    document.documentElement.addEventListener("pointerleave", hide);
    window.addEventListener("blur", hide);
    return () => {
      media.removeEventListener("change", sync);
      window.removeEventListener("pointermove", move);
      document.documentElement.removeEventListener("pointerleave", hide);
      window.removeEventListener("blur", hide);
    };
  }, []);
  return <div aria-hidden="true" ref={trail} className="cursor-trail" />;
}
